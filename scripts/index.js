console.log("test console log");
//Ties everything together
const express = require('express')
const app = express()
const port = 3000
var path = require("path");
//Routing for Home Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'../index.html')))
console.log(__dirname);
//Init Server and Run Code
app.listen(port, () => console.log(`Example app listening on port ${port}!`))