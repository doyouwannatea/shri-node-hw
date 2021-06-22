const express = require('express')
const app = express()

require('dotenv').config()
const { port, paths } = require('../config')

const {
    settingsRouter,
    buildsRouter
} = require('./routes')

app.use(express.json())
app.use(express.static(paths.client))

app.use('/api/settings', settingsRouter)
app.use('/api/builds', buildsRouter)

app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}/`)
)

module.exports = app