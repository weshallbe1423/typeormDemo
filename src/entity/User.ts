
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, Timestamp} from "typeorm";
import { Tweet } from "./tweets";


@Entity({name:"users"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email:string;

    @Column()
    password:string
    
    @Column()
    createdAt:Date

    // @OneToMany(()=>Tweet,tweet=>tweet.user)
    // tweets:Tweet[];

}
