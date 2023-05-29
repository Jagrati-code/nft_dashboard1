import fs from 'fs';
import csv from 'csv-parser';
import mongoose from "mongoose";
import dotenv from "dotenv";

import Transaction from '../models/Transaction.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => console.log("Error.............." , error) );

// const newTransaction = new Transaction({
//     TransactionId: "KTKT",
//     Timestamp: new Date("2023-03-20 17:19:09") ,
//     NftId: "K12K",
//     CollectionId: "KS14",
//     SellerId: "KS21",
//     BuyerId: "K1S1",
//     BaseAmount: 21,
//     FinalAmount: 21.6,
// });

// newTransaction.save()
//     .then(() => {
//         console.log('Data saved successfully');
//     })
//     .catch((error) => {
//         console.error('Error saving data:', error);
//     });

fs.createReadStream('./Data/TransactionData2.csv')
    .pipe(csv())
    .on('data', (data) => {

        const {TransactionId,TransactionTime,NftId,CollectionId,SellerId,BuyerId,BaseAmount,FinalAmount,Type} = data;        
        const newTransaction = new Transaction({
            TransactionId,NftId,CollectionId,SellerId,BuyerId,BaseAmount,FinalAmount,Type,
            Timestamp : new Date(TransactionTime)
        });

        // console.log(newTransaction);

        newTransaction.save()
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
