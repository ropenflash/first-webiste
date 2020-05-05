const dotenv = require('dotenv')
dotenv.config({ path: './../.env' })

const logger = require('./logger')
const server = require('./express/server')

const port = process.env.PORT || 3000

server.listen(port, () => {
    logger.log('info', `Application is running on ${port}`)
})