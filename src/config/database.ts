import { ConnectionOptions } from "typeorm";
import { Tweet } from "../entity/tweets";
import { User } from "../entity/User";
import *as dotenv from "dotenv";
dotenv.config();


const config :ConnectionOptions={
    type: "postgres",
    username: process.env.POSTGRES_USERNAME,
    host: process.env.POSTGRES_HOST,
    password:process.env.POSTGRES_PASSWORD,
    port: 5432,
    database:"company",
    
    
}


export default config;