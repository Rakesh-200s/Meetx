import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import dotenv from "dotenv/config";

import usersRoute from "./routes/users.route.js";

import mongoose from "mongoose";
import cors from "cors";
const app=express();

import { connectToSocket } from "./controllers/socketManager.js";

const server = createServer(app);
const io = connectToSocket(server);
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.set("port", (process.env.PORT||8080));
app.set( "mongo_url",(process.env.MONGO_URL));
const dbUrl=app.get("mongo_url");

app.use("/api/v1/users",usersRoute);

mongoose.connect(dbUrl)
.then(()=>{
  console.log("connect database");
}).catch(err=>console.error("mongoose connection error",err));

const start= async ()=>{
  const port=app.get("port");
  server.listen(port,()=>{
    console.log(`app is Listen on ${port}`);
  })
}
start();