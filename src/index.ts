import "reflect-metadata";
import { createConnection } from "typeorm";
import *as express from "express";
import * as morgan from "morgan";
import Router from "./routes/index";
import * as cors from "cors";
import * as dotenv from "dotenv";
import * as createError from "http-errors";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("tiny"));
app.use(Router);

createConnection()
  .then(async (_connection) => {
    if(_connection.isConnected){
      await _connection.connect
      console.log("connected to postgres db ")  
      app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
      });
    }
  
  })
  .catch((err) => {
    console.log("Unable to connect to db", err.message);
    process.exit(1);
  });

app.use((req,res,next)=>{
    next(new createError.NotFound());
})
app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            status:err.status||500,
            message:err.message
        }
    }) 
})