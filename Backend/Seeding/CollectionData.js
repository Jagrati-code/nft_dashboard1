import fs from 'fs';
import csv from 'csv-parser';
import mongoose from "mongoose";
import dotenv from "dotenv";

import Collection from '../models/Collection.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => console.log("Error.............." , error) );

fs.createReadStream('./Data/CollectionData2.csv')
    .pipe(csv())
    .on('data', (data) => {

        const {CollectionId,OwnerId,Category,Description,Name,ImageUrl,CommunitySize,CreatedDate,OwnerName} = data;

        // console.log(data);
        
        const newCollection = new Collection({
            CollectionId,OwnerId,Category,Description,Name,ImageUrl,CommunitySize,CreatedDate,OwnerName
        });

        // console.log(newCollection);

        newCollection.save()
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
