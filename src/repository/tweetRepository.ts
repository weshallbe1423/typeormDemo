import { getRepository } from "typeorm";
import { Tweet } from "../entity/tweets";

export interface ITweet{
    id:number;
    title:string;
    content:string;   
}

export const createTweet=async(payload:ITweet):Promise<Tweet>=>{
    const tweetRepository=getRepository(Tweet);
    const tweet=new Tweet();
    return await tweetRepository.save({
        ...tweet,
        ...payload
    })
    
}
export const getUsertweets=async():Promise<Array<Tweet>>=>{
    const tweetRepository=getRepository(Tweet);
    return await tweetRepository.find();
}