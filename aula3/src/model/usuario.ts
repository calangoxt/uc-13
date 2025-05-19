export class Usuario {
   /* private name: string;
    private cpf: string;
    private idade: number;
    constructor
        (name: string, cpf: string, idade: number) {
        this.name = name;
        this.cpf = cpf;
        this.idade = idade;
    }
    */
    constructor(public id: number, public nome: string, public email: string) {}
   
} export const usuarios: Usuario[] = [];