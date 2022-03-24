require('dotenv').config()

const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

io.on("connect", (socket) => {
    console.log("New Server Connect")
})

httpServer.listen(process.env.PORT, (req, res) => {
    console.log("Server running on port: 3000")
})