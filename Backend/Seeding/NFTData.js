import fs from 'fs';
import csv from 'csv-parser';
import mongoose from "mongoose";
import dotenv from "dotenv";

import NFT from '../models/NFT.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => console.log("Error.............." , error) );

fs.createReadStream('./Data/NFTData.csv')
    .pipe(csv())
    .on('data', (data) => {

        const { NftId,Name,OwnerId,OwnerName,CollectionId,Category,NoOfTransactions,
            CreatedDate,FloorValue,Description,Rarity,ImageUrl} = data;

        // console.log(data);
        
        const newNFT = new NFT({
            NftId,
            Name,
            OwnerId,
            OwnerName,
            CollectionId,
            Category,
            NoOfTransactions,
            CreatedDate,
            FloorValue,
            Description,
            Rarity,
            ImageUrl
        });

        // console.log(newNFT);

        newNFT.save()
        .then(() => {
            console.log('Data saved successfully');
        })
        .catch((error) => {
            console.error('Error saving data:', error);
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
