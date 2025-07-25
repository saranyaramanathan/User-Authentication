const express=require("express");
const { userSignUp, userLogin, getUser } = require("../controller/users");
const {authenticate}=require("../middleware/auth")
const router=express.Router();

router.post("/register",userSignUp);    //register a user
router.post("/login",userLogin);     //user login 
router.get("/:id",authenticate,getUser);        //get user
module.exports=router;