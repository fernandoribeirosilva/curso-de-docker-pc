const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const server = express()

server.get('/', (req, res) => {
	res.send('Olá minha imagem')
})

server.listen(process.env.PORT, () => {
	console.log(`Executando na porta: ${process.env.PORT}`)
})
