import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

const dbUri = process.env.MONGO_URI;
const options = {};
let mongooseConnection: typeof mongoose | undefined;

export const connectToDB = async(): Promise < void > => {
    if (!mongooseConnection) {
        mongooseConnection = await mongoose.connect(dbUri!, options);
    }
   

    console.log("MongoDB Connected...");
};

export const closeDB = async(): Promise < void > => {
    if (mongooseConnection) {
        mongooseConnection.connection.close();
        console.log('Database connection closed.');
    }
};