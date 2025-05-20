
import express, {Application } from "express";
import UsuarioRoutes from "./routes/UsuarioRoutes";
import ProdutoRoutes from "./routes/ProdutoRoutes";


const app:Application = express();
app.use(express.json());
app.use("/api", UsuarioRoutes);
app.use("/api", ProdutoRoutes);

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000!"));