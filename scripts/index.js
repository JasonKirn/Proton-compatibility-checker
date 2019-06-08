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

    //Code to start server
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    //Start and run Controller
    var controller = require("../scripts/controller");
}
startServer();