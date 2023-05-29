import { Router } from "express";
import Transaction from "../models/Transaction.js"; 
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

// require Authorization for all NFT routes
router.use(requireAuth);

// router.post("/create", async (req,res) => {
//     try{

//         const newTransaction = new Transaction(req.body);

//         const savedTransaction = await newTransaction.save();
//         res.status(200).json({data : savedTransaction});

//     }catch(err){
//         return res.status(500).json(err);
//     }
// })

router.get("/all", async (req,res) => {
    try{

        const transactions = await Transaction.find({});
        return res.status(200).json({data : transactions});

    }catch(err){
        return res.status(500).json(err);
    }
})

router.get("/:id", async (req,res) => {
    try{

        const transaction = await Transaction.findById(req.params.id);

        if(!transaction)
            return res.status(404).json({error: "Transaction Not Found."})

        return res.status(200).json({data: transaction});

    }catch(err){
        return res.status(500).json(err);
    }
})

export default router;