import mongoose from "mongoose";

const CollectionSchema = new mongoose.Schema({

    CollectionId: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },

    OwnerId : {
        type: String,
        required: true,
        min: 3,
        max: 20
    },

    Category : {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Name: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },

    ImageUrl : {
        type: String,
        required: true
    },

    CommunitySize: {
        type: Number,
        required: true
    },

    CreatedDate: {
        type: Date,
        required: true
    },
    
    OwnerName: {
        type: String,
        required: true
    }

}, {timestamps: true} 
);

export default mongoose.model("Collection",CollectionSchema);