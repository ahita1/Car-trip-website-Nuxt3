require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({ origin: "*" }));


 
// mongodb+srv://ahita:<password>@cluster0.md1ps2w.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
process.env.MONGODB_URI  ,{ useNewUrlParser: true, useUnifiedTopology: true }
 )
  .then(() => {
    console.log("Ahita don's worry it's connected to the database successfully haha");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("hello world haha");
});

app.use("/carDetails" , require("./routes/carDetails"));
// app.use("/accounts" , require("./routes/accounts"));

app.listen(process.env.PORT, () => {  
  console.log("server started!");
});