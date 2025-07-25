const express=require("express");
const app = express();
const dotenv=require("dotenv").config();
const cors = require("cors");

const PORT=process.env.PORT;

const connectDB=require("./config/connectionDB");
app.use(
  cors({
    origin: "*",
  })
);
connectDB();
app.use(express.json());
app.use("/user",require("./routes/user"));

app.listen(PORT, function() {
    console.log(new Date().toISOString() + `: server started on port ${PORT}`);
});