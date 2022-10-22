const express = require('express')
const route = express()
const controller = require('./controller')

// create routes 
route.get('/list', controller.list)
route.get('/create', controller.create )
route.get('/update/:id', controller.update )
route.get('/delete/:id', controller.delete)
module.exports = route