/**
 * Main JS file for Proton combatablitly checker. Starts express server and intalizes view.
 */
startServer = function () {
    //Variable declartions needed to start express
    const express = require('express')
    const app = express()
    const port = 3000
    const pathVar = require("path");
    const bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());



    //Route declerations for webpage traversal
    app.get('/', (req, res) => res.sendFile(pathVar.join(__dirname, '../index.html')))
    app.get('/scripts/main.js', (req, res) => res.sendFile(pathVar.join(__dirname, '../scripts/main.js')))
    app.post("/getSteamGames", (req, res) => getSteamGames(req, res))
    
    getSteamGames = async function(req, res) {
       console.log(await controller.retriveGames(req.body.userid))
    }
    //Code to start server
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    //Start and run Controller
    var Controller = require("../scripts/controller.js")
    controller = new Controller()
}
startServer();
