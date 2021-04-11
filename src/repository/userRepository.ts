import { getRepository } from "typeorm";
import { User } from "../entity/User";


export interface IUser{
    firstName?: string;
    lastName?: string;
    email:string;
    password:string;
    createdAt:Date
    age: number;
}

export const createUser=async (payload:IUser) :Promise <User> =>{
    const userRepository=getRepository(User);
    const user=new User();
    return await userRepository.save({
        ...user,
        ...payload
    })
}

export const getAllUsers=async():Promise<Array<User>>=>{
    const userRepository=getRepository(User);
    return await userRepository.find()
}

export const getUserById=async(id:number):Promise<User | null>=>{
    const userRepository=getRepository(User);
    const user=await userRepository.findOne({id:id})
    return user;
}