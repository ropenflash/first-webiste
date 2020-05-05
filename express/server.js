const express = require('express')
const path = require('path')
const serverless = require('serverless-http')
const app = express()

app.use(express.static(path.resolve('build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('build/index.html'))
})
module.exports = app
module.exports.handler = serverless(app)