import { produtos,Produto } from '../model/produto';
import {Request, Response} from 'express';
// Criar um novo usuário
export const criarProduto = (req: Request, res: Response) => {
    const { id, nome,preco } = req.body;
    if(!id|| !nome||!preco) {
        res.status(400).json({ mensagem: 'Preencha todos os campos' });
        return 
    }
    const novoProduto = new Produto(id, nome, preco);
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "produto criado com sucesso!",produto: novoProduto });
    return
  };
  
  // Listar todos os usuários
  export const listarProdutos = (req: Request, res: Response) => {
    res.status(200).json(produtos);
  };
  
  // Buscar um usuário por ID
  export const buscarProdutoPorId = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = produtos.find(u => u.id === id);
    if (!produto) {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
        return 
    }
    res.status(200).json(produto);
  };

  // Atualizar um usuário
  export const atualizarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, preco } = req.body;
    if(!id) {
        res.status(400).json({ mensagem: 'id é obrigatório' });
        return 
    }
    if( !nome && !preco) {
      res.status(400).json({ mensagem: 'um dos campos (nome ou preco) é obrigatório' });
      return
    }
    const produto = produtos.find(u => u.id === id);
    if (!produto){
       res.status(404).json({ mensagem: "produto não encontrado" });
       return 
    }
  
    produto.nome = nome || produto.nome;
    produto.preco = preco || produto.preco;
    res.status(200).json({ mensagem: "Usuário atualizado com sucesso!", produto });
  };
  
  // Deletar um usuário
  export const deletarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(u => u.id === id);
    if (index === -1) {
      res.status(404).json({ mensagem: "produto não encontrado" });
      return 
    }
  
    produtos.splice(index, 1);
    res.status(200).json({ mensagem: "produto deletado com sucesso!" });
    return
  };
