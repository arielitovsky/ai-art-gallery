require('dotenv').config()
const getters = require('./src/create/getters.js')

var express = require('express');
var app = express();



app.get('/', function (req, res) {
   res.send('Welcome to the AI art gallery');
})


app.get('/generate', getters.generateImage)


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server is running on port http://%s:%s", host, port)
})

