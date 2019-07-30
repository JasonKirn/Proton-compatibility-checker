/**
 * Main JS file for Proton combatablitly checker. Starts express server and intalizes view.
 */
startServer = function () {
    //Variable declartions needed to start express
    const expresss = require('express')
    const app = expresss()
    const port = 3000
    const pathVar = require("path");


    //Route declerations for webpage traversal
    app.get('/', (req, res) => res.sendFile(pathVar.join(__dirname, '../index.html')))
    app.get('/scripts/main.js', (req, res) => res.sendFile(pathVar.join(__dirname, '../scripts/main.js')))
    app.post("/getSteamGames", (req, res) => console.log("command recieved"))

    //Code to start server
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    //Start and run Controller
    var Controller = require("../scripts/controller.js")
    controller = new Controller()
}
startServer();
