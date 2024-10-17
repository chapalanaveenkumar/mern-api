const express=require('express');
const router=express.Router();
const userController =require('../controllers/userControl'); 



router.get("/",userController.getAllposts);
module.exports=router;