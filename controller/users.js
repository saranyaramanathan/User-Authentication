const User =require("../model/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp=async(req,res)=>{
try {
     const { username,email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" })
    }
    let user = await User.findOne({ email })
    if (user) {
        return res.status(400).json({ error: "Email is already exist" })
    }
     const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(req.body.password, salt);
const newUser = new User({
      username:req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.json({ message: "User Created" });
    
} catch (error) {
      res.status(500).json({ message: "Something went wrong" });
}
}
const userLogin=async(req,res)=>{
try {
      const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password is required" })
    }
    const user = await User.findOne({email:req.body.email})
    if(user){
        const checkPassword=bcrypt.compareSync(req.body.password,user.password);
        if(checkPassword){
            const token = jwt.sign({_id:user._id,role:"user"},process.env.SECRET_KEY,{expiresIn:"1h"})
             res.json({ message: "Correct Password",token})
        }else{
             res.status(400).json({ error: "Invaild credientials" })
        }
    }
} catch (error) {
    res.status(500).json({message:"Error"})
}
}
const getUser=async(req,res)=>{
try {
    const user = await User.findById(req.params.id)
    res.json({username:user.username,email:user.email})
} catch (error) {
    res.status(500).json({message:"Error"})
}
}
module.exports={userSignUp,userLogin,getUser}