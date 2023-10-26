const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

// https://localhost:3000/usuarios/20
app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id
    console.log(`Acessando dados do usuário ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

// : criar propriedade dentro dos parâmetros
// requisicao.params.(nome da propriedade) depende do nome da propriedade

// dirname = diretório, nome da pasta

// https://localhost:3000
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

// nodemon - monitora o código quando fizer uma alteração, cancela o servidor e altera sozinho.

// utiliza-se no package.json.