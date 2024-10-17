const express=require('express');
const router=express.Router();
const userController =require('../controllers/userControl'); 

router.get("/",userController.getAllposts);
router.post('',userController.adduser)
router.delete('/:id',userController.deleteuser)
router.put('/:id',userController.updateuser)
router.get('/:id',userController.getbyid)
module.exports=router;