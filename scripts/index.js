//This code runs the express server
console.log("test console log");


//Ties everything together
const expresss = require('express')
const app = expresss()
const port = 3000
var pathVar = require("path");


//Routing for Home Page
app.get('/', (req, res) => res.sendFile(pathVar.join(__dirname,'../index.html')))
app.get('/himjim', (req, res) => {
    res.send('This is the rootinest tootinest webpage himjim')
})

//Init Server and Run Code
app.listen(port, () => console.log(`Example app listening on port ${port}!`))