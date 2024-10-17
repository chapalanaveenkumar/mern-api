const Post=require('../models/users')

const getAllposts=async (req,res)=>{
    try{
        const posts=await Post.find();
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json({message:"no data"})
    }
}

module.exports={
    getAllposts
}