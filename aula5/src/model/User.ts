import { Entity, PrimaryGeneratedColumn, Column, OneToMany, PrimaryColumn } from "typeorm";
import { Order } from "./Order";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ length: 100, nullable: false })
    private name: string;

    @PrimaryColumn({ unique: true, type: "number", precision: 15 })
    private number: number;

    @Column({ unique: true })
    private email: string;

    @Column({ nullable: false })
    private password: string;

    @Column({ default: "customer" })
    private role: string;


    @OneToMany(() => Order, (order) => order.user)
    orders!: Order[];
    
    /**
     * Getter $number
     * @return {number}
     */
    public get $number(): number {
        return this.number;
    }

    /**
     * Setter $number
     * @param {number} value
     */
    public set $number(value: number) {
        this.number = value;
    }





    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
        return this.email;
    }

    /**
     * Getter $password
     * @return {string}
     */
    public get $password(): string {
        return this.password;
    }

    /**
     * Getter $role
     * @return {string}
     */
    public get $role(): string {
        return this.role;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Setter $email
     * @param {string} value
     */
    public set $email(value: string) {
        this.email = value;
    }

    /**
     * Setter $password
     * @param {string} value
     */
    public set $password(value: string) {
        this.password = value;
    }

    /**
     * Setter $role
     * @param {string} value
     */
    public set $role(value: string) {
        this.role = value;
    }

    constructor(name: string, number: number, email: string, password: string, role: string
    ) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}


