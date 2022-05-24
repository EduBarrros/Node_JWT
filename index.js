const express = require('express')

const app = express()

const usuarios = [
    { nome: 'Jancer', idade: 19 },
    { nome: 'Aline', idade: 24 },
    { nome: 'Maria', idade: 15 },
    { nome: 'Eduardo', idade: 22 },
]

app.get('/', (req, res) => {
    res.status(200).send("OK");
})

app.post('/login', (req, res) => {
    res.status(200).send("OK Login");
})

app.post('/criar', (req, res) => {
    res.status(200).send("OK Criar");
})

// Route Params
app.get('/usuarios/:idade', (req, res) => {
    const { idade } = req.params
    const usuario = usuarios.find((usuarios) => {
        return usuarios.idade == idade
    })
    if(usuario){
        res.status(200).send(usuario)
    }else{
        res.status(404).send('O usuário não foi encontrado')
    }
})

// Querys
app.get('/usuarios', (req, res) => {
    const { idade } = req.query
    console.log(req.query)
    const usuario = usuarios.find((usuarios) => {
        return usuarios.idade == idade
    })
    if(usuario){
        res.status(200).send(usuario)
    }else{
        res.status(404).send('O usuário não foi encontrado')
    }
})



app.listen(3000, () => {
    console.log('Servidor sendo executado na porta 3000')
})