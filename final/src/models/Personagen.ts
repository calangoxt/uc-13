import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Personagens')
export class Personagens {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({ type: "varchar", length: 255, nullable: false })
    nome: string;
    @Column({ type: "text" })
    descricao: string;
    @Column({ type: "text" })
    imgUrl: string;
    constructor(nome: string, descricao: string, imgUrl: string) {
        this.nome = nome;
        this.descricao = descricao;
        this.imgUrl = imgUrl;
    }
}