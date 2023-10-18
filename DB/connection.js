import mongoose from "mongoose";

const connectDB=async(URL)=>{
    const option={
        dbName:process.env.DATBASE_NAME
    }
    await mongoose.connect(URL,option)
    console.log('database connection stablished..')
}


export default connectDB