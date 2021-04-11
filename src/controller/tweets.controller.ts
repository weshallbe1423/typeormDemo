import { Request, Response } from "express";
import {  getRepository } from "typeorm";
import { User } from "../entity/User";


export let saveUsers=(req:Request,res:Response)=>{
   console.log( req.body);
    const useRepo=getRepository(User)
    console.log(useRepo);
}