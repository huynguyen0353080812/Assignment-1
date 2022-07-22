
import express from "express";
import "dotenv/config";
import cors from 'cors'
import router from "./routes/product";
import mongoose from "mongoose";
import Userouter from './routes/auth'
const app = express();

app.use(express.json())   
app.use(cors())
app.use(router)
app.use(Userouter)
// app.use("/api",routerProduct);

mongoose.connect('mongodb://localhost:27017/we17103', () => {
    console.log('successfully')
});

app.listen(process.env.PORT, () => {
  console.log("thành công" + process.env.PORT);
});
