const express = require('express')
require('dotenv').config() // To use file .env
const routes = require('./routes');
const app = express()
app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.listen(app.get('port'), ()=> {
    console.log('http://localhost:' + app.get('port'))
}); 

app.use(routes)