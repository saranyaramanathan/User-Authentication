const mongoose=require("mongoose");
const connectDB = async()=>{
    await mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>{console.log("DB connected")})
    .catch(err => console.error("Mongo connection error:", err));
}
module.exports=connectDB