import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";

// import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import nftRoute from './routes/nft.js';
import collectionRoute from './routes/collection.js';
import transactionRoute from './routes/transaction.js';

import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => console.log("Error.............." , error) );

// mongoose.connect(process.env.MONGO_URL, (err) => {
//     if(err)
//         console.log("Error.............." , err) 
//     else
//         console.log("MongoDB database connected.")
// });

const app = express();

app.use(cors());

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/nft", nftRoute);
app.use("/api/collection", collectionRoute);
app.use('/api/transaction', transactionRoute);


app.listen(process.env.PORT, () => {
    console.log("Backend server is running!");
})