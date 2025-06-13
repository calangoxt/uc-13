import { Column, Entity } from "typeorm";

export { Entity,PrimaryGeneratedColumn ,Column}from "typeorm"

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column( { type: "varchar", length: 100, nullable: false, unique: true } )
    email: string;

    @Column({ type:"varchar",length:255,nullable:false})
    password: string;


	constructor( email: string, password: string) {
        this.email = email;
        this.password = password;
	}
}

