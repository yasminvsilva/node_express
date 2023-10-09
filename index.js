const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

// dirname = diretório, nome da pasta

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

// nodemon - monitora o código quando fizer uma alteração, cancela o servidor e altera sozinho.

// utiliza-se no package.json.