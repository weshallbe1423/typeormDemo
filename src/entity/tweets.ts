import { type } from "os";
import { Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity({name:"tweets"})
export class Tweet{
    @PrimaryGeneratedColumn("uuid")
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;
   
    // @ManyToOne(()=>User,user=>user.tweets)
    // user:User;

}
