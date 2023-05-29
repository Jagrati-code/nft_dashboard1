import { Router } from "express";
import NFT from "../models/NFT.js";
import Collection from "../models/Collection.js";
import requireAuth from "../middleware/requireAuth.js";

const router = Router();

// require Authorization for all NFT routes
router.use(requireAuth);

// router.post("/create", async (req,res) => {
//     try{

//         const newNFT = new NFT(req.body);
//         const savedNFT = await newNFT.save();
//         res.status(200).json({data: savedNFT});

//     }catch(err){
        
//         return res.status(500).json(err);
//     }
// })

router.get("/all", async (req,res) => {
    try{

        const NFTs = await NFT.find({});
        return res.status(200).json({data: NFTs});

    }catch(err){
        return res.status(500).json(err);
    }
})

router.get("/:id", async (req,res) => {
    try{

        const nft = await NFT.findById(req.params.id);

        if(!nft)
            return res.status(404).json({error: "NFT Not Found."})

        return res.status(200).json({data: nft});

    }catch(err){
        return res.status(500).json(err);
    }
})

router.get("/getAllInCollection/:id", async (req,res) => {
    try{

        const nfts = await NFT.find({collectionid : req.params.id});

        if(nfts.length === 0)
            return res.status(404).json({error : "No NFTs found in this collection"});

        return res.status(200).json({data : nfts});

    }catch(err){
        return res.status(500).json(err);
    }
})

export default router;
