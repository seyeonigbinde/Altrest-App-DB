const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const fileUpload = require('express-fileupload');

const userRouter = require('./users/users_router')
const authRouter = require('./auth/auth-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(fileUpload());

server.use('/api/auth', authRouter)
server.use('/api', userRouter)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server



