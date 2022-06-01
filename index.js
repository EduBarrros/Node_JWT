const express = require('express')
const fs = require('fs')
const app = express()
const router = require('./routes/login_criar')

app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
    res.status(200).send("OK");
})

// == Endpoint para cadastro de dados local ==
//
// app.post('/usuarios', (req, res) => {
//     const { nome, email, saldo } = req.body
//     const dadosProcessados = { nome, email, saldo }
//     dadosLocais.push(dadosProcessados)
//     const dadosConvertidos = JSON.stringify(dadosLocais, null, 2)
//     fs.writeFileSync('dados.json', dadosConvertidos)
//     res.status(200).send("OK Usuários");
// })

// == Inicio endpoints de exemplo ==
//
// const usuarios = [
//     { nome: 'Jancer', idade: 19 },
//     { nome: 'Aline', idade: 24 },
//     { nome: 'Maria', idade: 15 },
//     { nome: 'Eduardo', idade: 22 },
// ]
//
// == Route Params exemple ==
//
// app.get('/usuarios/:idade', (req, res) => {
//     const { idade } = req.params
//     const usuario = usuarios.find((usuarios) => {
//         return usuarios.idade == idade
//     })
//     if(usuario){
//         res.status(200).send(usuario)
//     }else{
//         res.status(404).send('O usuário não foi encontrado')
//     }
// })
//
// == Querys exemple ==
//
// app.get('/usuarios', (req, res) => {
//     const { idade } = req.query
//     console.log(req.query)
//     const usuario = usuarios.find((usuarios) => {
//         return usuarios.idade == idade
//     })
//     if(usuario){
//         res.status(200).send(usuario)
//     }else{
//         res.status(404).send('O usuário não foi encontrado')
//     }
// })
//
// == Fim endpoints de exemplo ==

app.listen(3000, () => {
    console.log('Servidor sendo executado na porta 3000')
})