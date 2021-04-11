import { Request, Response } from "express";
import *as createError from "http-errors";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import e = require("express");
import * as bcrypt from "bcrypt";
import { nextTick } from "process";

export class UserController {  
    constructor() {
    }
  
    public async signUp(req:Request,res:Response,next:any){
       try {
            if(!req.body) throw new createError.BadRequest();
            const {email,password,firstName,lastName,age}=req.body
            console.log(email);
            const salt= await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(password,salt);
            console.log(hashedPassword);
            let user=new User()
            user.firstName=firstName;
            user.lastName=lastName;
            user.age=age;
            user.email=email;
            user.password=hashedPassword;
            user.createdAt= new Date();
            const userRepo=await getRepository(User);
            const doesUserExists=await userRepo.findOne({email:email});
            console.log(doesUserExists);
            if(doesUserExists) {
                throw new createError.Conflict();
            } else{
                const userData=await userRepo.save(user);
                res.send({
                    message:"user created successfully",
                    userDetails:userData
                })
            }
            
       } catch (error) {
        next(error);
       }
    }
    public async login(req:Request,res:Response,next){
        try {
            const {email,password}=req.body;
            const userRepo=await getRepository(User);
            const doesUserExists=await userRepo.findOne({email:email});
            if(!doesUserExists) throw new createError.NotFound();
            const userData=await userRepo.findOne({email:email});
            const isValid=await bcrypt.compare(password,userData.password);
            if(!isValid) throw new createError.Unauthorized();
            res.send({
                message:"Login successful"
            })
        } catch (error) {
            next(error);
        }
        
    }
   
}