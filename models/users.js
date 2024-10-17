const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    rollno:{type:String,required:true},
    mobileno:{type:String,required:true},
    createdDate:{type:Date,default:Date.now()},
    role:{type:String,default:"Student"},

})

const Post=mongoose.model('students',postSchema);

module.exports={
    Post
}