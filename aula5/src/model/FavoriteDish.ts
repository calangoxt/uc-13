import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { User } from "./User";
import { Dish } from "./Dish";


@Entity('favoriteDish')
export class FavoriteDish {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(()=>User,(user)=>user.id)
    userId!: number;

    @ManyToMany(()=>Dish,(dish)=>dish.id)
    dishId!: number;

    

}