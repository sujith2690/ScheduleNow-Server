import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const URL = process.env.MongoURL

const DBconnection = async () => {
    try {
        await mongoose.connect(URL); 
        console.log('Db Connected');
    } catch (error) {
        console.log('Error in Db connection:', error);
    }
};
export default DBconnection