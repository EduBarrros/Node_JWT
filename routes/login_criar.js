const express = require('express')
const bcrypt = require('bcrypt')
const fs = require('fs')
const router = express.Router()

const dadosLocais = JSON.parse(fs.readFileSync("dados.json"))

router.post('/login', (req, res) => {
    const { email, senha } = req.body

    if (!email || !senha) {
        res.status(422).send('Você deve definir um email e uma senha.')
    }

    const usuario = dadosLocais.find((user) => user.email === email)

    if (!usuario) {
        res.status(401).send('Email ou senha inválidos.')
    }

    if (!bcrypt.compareSync(senha, usuario.hash)) {
        res.status(401).send('Email ou senha inválidos.')
    }

    res.status(200).send({
        nome: usuario.nome,
        email: usuario.email,
        dados: usuario.dados
    })
})

router.post('/criar', (req, res) => {
    const { nome, email, senha } = req.body
    if (!email || !senha) {
        res.status(422).send('Você deve definir um email e uma senha.')
    } else if (dadosLocais.find((usuario) => usuario.nome === nome || usuario.email === email)) {
        res.status(401).send('Nome ou email de usuário já está em uso.')
    } else {
        var dadosUsuario = {
            nome: nome,
            email: email,
            dados: {}
        }
        const salt = bcrypt.genSaltSync(10)
        dadosUsuario.hash = bcrypt.hashSync(senha, salt)
        dadosLocais.push(dadosUsuario)
        const dadosConvertidos = JSON.stringify(dadosLocais, null, 2)
        fs.writeFileSync("dados.json", dadosConvertidos)
        res.status(200).send("Usuário cadastrado com sucesso!");
    }
})

module.exports = router