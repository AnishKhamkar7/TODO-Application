import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const mongodbcon = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_NAME}`)
        console.log("MONGO DB CONNECTED!!!");
    } catch (error) {
        console.error("CONNECTION ERROR",error)
        process.exit(1)
        
    }
}

export {connectDB}