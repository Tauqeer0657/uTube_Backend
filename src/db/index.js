import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODBURI);
        console.log(`MongoDB connected !!! DB Host : ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MongoDb connection failed : ", error);
        process.exit(1);
    }
}
