const express = require('express')
const autenticacao = require('./middlewares/autenticacao')
const app = express()
const router = require('./routes/login_criar')

app.use(express.json())
app.use(router)

app.get('/', autenticacao, (req, res) => {
    res.status(200).send({
        nome: req.user.nome,
        email: req.user.email,
        dados: req.user.dados
    });
})

app.listen(3000, () => {
    console.log('Servidor sendo executado na porta 3000')
})