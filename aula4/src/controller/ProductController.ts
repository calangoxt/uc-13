import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Product } from '../models/Product';

const productRepository = AppDataSource.getRepository(Product);

export class ProductController {
    // Listar todos os usuários
    async list(req: Request, res: Response) {
        const prod = await productRepository.find();
        res.json(prod);
        return
    }

    // Criar novo usuário
    async create(req: Request, res: Response) {
        const { name, price, descricao } = req.body;

        const product = productRepository.create({ name: name, price: price, descricao: descricao });
        await productRepository.save(product);
        res.status(201).json(product);
        return
    }

    // Buscar usuário por ID
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const product = await productRepository.findOneBy({ id: Number(id) });

        if (!product) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return
        }
        res.json(product);
        return

    }

    // Atualizar usuário
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, descricao } = req.body;

        const product = await productRepository.findOneBy({ id: Number(id) });

        if (!product) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return
        }

        product.name = name;
        product.price = price;
        product.descricao = descricao;


        await productRepository.save(product);
        res.json(product);
        return
    }

    // Deletar usuário
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const product = await productRepository.findOneBy({ id: Number(id) });

        if (!product) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return
        }

        await productRepository.remove(product);
        res.status(204).send();
        return
    }
}