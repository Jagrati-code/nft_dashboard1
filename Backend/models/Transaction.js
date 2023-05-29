import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({

    TransactionId: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },

    Timestamp: {
        type: Date,
        required: true
    },

    NftId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    CollectionId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    SellerId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    BuyerId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    BaseAmount: {
        type: Number,
        required: true
    },

    FinalAmount: {
        type: Number,
        required: true
    },

    Type: {
        type: String,
        required: true
    }

}, {timestamps: true} 
);

export default mongoose.model("Transaction",TransactionSchema);