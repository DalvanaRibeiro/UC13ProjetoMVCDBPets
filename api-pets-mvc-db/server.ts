import  express  from "express";
import path from "path";

// Importando as rotas da API
import { petRoutes } from "./routes/pet.routes";
const app = express()

app.use(express.json())
// Servir arquivos estáticos do front 
// utilizamos o path que é um módulo do node para trabalhar com caminhos de arquivos, neste caso para o front
// __dirname é a pasta atual do arquivo join vai juntar com o public que estará o html, css e js
app.use(express.static(path.join(__dirname, "public"))) 
// Registra as rotas da API
app.use(petRoutes)
// Quando acessar "/" , vai abrir index.hrml
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
// Inicia o servidor
app.listen(3000, () => {
    console.log("🚀 Servidor rodando em: http://localhost:3000")
})
