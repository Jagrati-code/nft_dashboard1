import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NFTSchema = new mongoose.Schema({

    NftId: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },

    Name: {
        type: String,
        required: true,
        max: 50
    },

    OwnerId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    OwnerName : {
        type: String,
        required: true,
        min: 2,
        max: 20
    },

    CollectionId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    Category : {
        type: String,
        required: true
    },

    NoOfTransactions: {
        type: Number,
        required: true
    },

    CreatedDate : {
        type: Date,
        required : true
    },

    FloorValue : {
        type: Number,
        required: true
    },
    
    Description: {
        type: String,
        required: true
    },

    Rarity: {
        type: Number,
        required: true
    },

    ImageUrl : {
        type: String,
        required: true
    }

}, {timestamps: true} 
);

export default mongoose.model("NFT",NFTSchema);