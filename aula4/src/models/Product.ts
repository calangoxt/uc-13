import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Product') // nome da tabela
export class Product {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false, unique: true })
    name: string;

    @Column({ type: "decimal", scale: 2, precision: 12, nullable: false })
    price: number;

    @Column({ type: "text", nullable: false })
    descricao: string;

    constructor(nome: string, price: number, descricao: string) {
        this.name = nome
        this.price = price
        this.descricao = descricao
    }
}