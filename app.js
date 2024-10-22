const express = require("express");
const app = express();
const connectDb = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const PORT = process.env.PORT;

app.use(express.json());

const startServer = async ()=>{
  try{
    await  connectDb();
    app.listen(PORT, ()=>{
      console.log(`app running at port ${PORT}`);
    })
  }catch(err){
    console.log(err, "Unable to start server");
  }
}
startServer();

//Routes
app.use(productRoutes);

module.exports= app;

