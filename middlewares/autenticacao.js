const jwt = require('jsonwebtoken')
const fs = require('fs')

module.exports = (req, res, next) => {

    const dadosLocais = JSON.parse(fs.readFileSync("dados.json"))

    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).send('O usuário precisa estar logado. COD 1');
    }
    const token = authorization.replace('Bearer ', '')
    jwt.verify(token, 'KEY_SECRETA', (err, payload) => {
        if (err) {
            res.status(401).send('O usuário precisa estar logado. COD 2');
        }
        console.log('Teste payload', payload)
        const { Id } = payload
        const user = dadosLocais.find((user) => user.id === Id)

        if (!user) {
            res.status(401).send('O usuário precisa estar logado. COD 3');
        }

        req.user = user
        next()
    })
}