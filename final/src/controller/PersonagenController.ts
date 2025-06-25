import { Request, Response } from 'express';
import { AppDataSource } from '../config/data-source';
import { Personagens } from '../models/Personagen';

const personagemRepository = AppDataSource.getRepository(Personagens);

export class PersonagemController {

    // Listar todos os usuários
    async list(req: Request, res: Response) {
        const users = await personagemRepository.find();
        res.json(users);
        return
    }


    

    // Criar novo usuário
    async create(req: Request, res: Response) {
        const { nome, descricao,imgUrl } = req.body;

        if(!nome || !descricao || !imgUrl) {
            res.status(400).json({ message: "Todos os campos são necessários!" })
            return
        }

        const personagen = new Personagens(nome, descricao,imgUrl);
        const newPersonagem = await personagemRepository.create(personagen)
        await personagemRepository.save(newPersonagem)

        res.status(201).json({ message: "personagen criado com sucesso", personagen: newPersonagem })
        return

    }

    // Buscar usuário por ID
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const personagem = await personagemRepository.findOneBy({ id: Number(id) });

        if (!personagem) {
             res.status(404).json({ message: 'personagem não encontrado' });
             return
        }

         res.json(personagem);
         return
    }

    // Atualizar usuário
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, descricao,imgUrl } = req.body;

        const personagem = await personagemRepository.findOneBy({ id: Number(id) });

        if (!personagem) {
             res.status(404).json({ message: 'personagem não encontrado' });
             return
        }

        personagem.nome = nome;
        personagem.descricao = descricao;
        personagem.imgUrl = imgUrl;


        await personagemRepository.save(personagem);

        res.json(personagem);
        return
    }

    // Deletar usuário
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const personagem = await personagemRepository.findOneBy({ id: Number(id) });

        if (!personagem) {
             res.status(404).json({ message: 'Personagem não encontrado' });
             return
        }

        await personagemRepository.remove(personagem);

         res.status(204).send();
         return
    }
}