const mongoose=require("mongoose");

const mongoURI="mongodb://localhost:27017/nodejsapi";

const connectDB=async()=>{
    try{
        await mongoose.connect(mongoURI);
            console.log("mongo db connected successfully");
    }catch(error){
        console.log(`Error connecting with database :${error}`);
        process.exit();
    }
}

module.exports={
    connectDB
}