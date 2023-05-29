import { Router } from "express";
import Collection from "../models/Collection.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

// require Authorization for all NFT routes
router.use(requireAuth);

// router.post("/create", async (req,res) => {
//     try{

//         const newCollection = new Collection(req.body);

//         const savedCollection = await newCollection.save();
//         res.status(200).json({data: savedCollection});

//     }catch(err){
//         return res.status(500).json(err);
//     }
// })

router.get("/all", async (req,res) => {
    try{

        const collections = await Collection.find({});
        return res.status(200).json({data: collections});

    }catch(err){
        return res.status(500).json(err);
    }
})

router.get("/:id", async (req,res) => {
    try{

        const collection = await Collection.findById(req.params.id);

        if(!collection)
            return res.status(404).json({error: "Collection Not Found."})

        return res.status(200).json({data : collection});

    }catch(err){
        return res.status(500).json(err);
    }
})

export default router;