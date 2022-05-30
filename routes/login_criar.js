const express = require('express')
const router = express.Router()


router.post('/login', (req, res) => {
    res.status(200).send("OK Login");
})

router.post('/criar', (req, res) => {
    res.status(200).send("OK Criar");
})

module.exports = router