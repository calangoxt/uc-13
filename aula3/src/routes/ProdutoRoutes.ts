import { Router } from "express";
import { criarProduto, listarProdutos, buscarProdutoPorId, atualizarProduto, deletarProduto } from "../controllers/ProdutoController";
const router = Router();

router.post("/produtos", criarProduto);
router.get("/produtos", listarProdutos);
router.get("/produtos/:id", buscarProdutoPorId);
router.put("/produtos/:id", atualizarProduto);
router.delete("/produtos/:id", deletarProduto);

export default router;