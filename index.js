require('dotenv').config()

const path = require('path')
const cors = require('cors')
const express = require('express')

const server = require('./api/server')

server.use(express.json())
server.use(cors())

const port = process.env.PORT

// server.use(express.static(path.join(__dirname, 'client/dist')))

// server.get('*', (req, res) => {
//   // if you want to serve a SPA using Express you totally can!
//   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
// })
server.get('/api', (req, res) => {
  res.json({ message: `${process.env.COHORT} ROCKS` })
})

server.listen(port, () => {
  console.log('listening on ' + port)
})
