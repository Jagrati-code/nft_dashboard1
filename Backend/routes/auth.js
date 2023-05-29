import {Router} from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from 'jsonwebtoken';

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1h'})
}


const router = Router();


router.post("/register", async (req,res) => {

    try{

        const {username, email, password} = req.body;
        
        //validation
        if(!email || !password || !username){
            throw Error("All fields must be filled");
        }

        if(!validator.isEmail(email)){
            throw Error("Email is not valid");
        }

        if(!validator.isStrongPassword(password)){
            throw Error("Password is not strong enough");
        }

        const checkuser = await User.findOne({ email: email });

        if(checkuser )
            throw Error("Email is already taken.");

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newuser = new User( {
            username: username,
            email : email,
            password: hashedPassword
        })

        const user = await newuser.save();

        const token = createToken(user._id)

        res.status(200).json({username, email, token});

    }
    catch(err){
        res.status(500).json({"error" : err.message});
    }

})

router.post("/login" , async (req,res) => {

    try{

        const {email, password} = req.body;

        if(!email || !password){
            throw Error("All fields must be filled");
        }
        const user = await User.findOne({ email: email });
       
        if(!user)
            throw Error("Email Not found");

        const validPassword = await bcrypt.compare(password , user.password);
        if(!validPassword)
            throw Error("Wrong password");
        
        const token = createToken(user._id);

        res.status(200).json({username: user.username, email, token});
    }
    catch(err){
        res.status(500).json({"error": err.message});
    }

})

export default router;