var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json");


var SteamModel = require("../models/steammodel.js");
var GameListModel = require("../models/gamelistmodel.js");

var steamModel = new SteamModel(apikey);
var gameListModel = new GameListModel();

var ProtonModel = require("../models/protonmodel.js")

steamModel.retriveGames(testUser)
   .then(unprocessedSteamData => { proccessSteamData(unprocessedSteamData) })
   .catch(console.log(Error))




proccessSteamData = function (unprocessedSteamData) {
   gameListModel.importSteamGameList(unprocessedSteamData);
   sortGameList("name", true)
   ProtonModel.processGameList(gameListModel)
class Controller {
   constructor() {
      this.apikey = require("../keys/steamapikey.json");
      this.SteamModel = require("../models/steammodel.js");
      this.GameListModel = require("../models/gamelistmodel.js");
      this.steamModel = new this.SteamModel(this.apikey)
      this.gameListModel = new this.GameListModel();
   }
   retriveSteamGames(user) {
      this.steamModel.retriveGames(user)
         .then(unprocessedSteamData => { this.proccessSteamData(unprocessedSteamData) })
         .catch(console.log(Error))
   }
   proccessSteamData(unprocessedSteamData) {
      this.gameListModel.importSteamGameList(unprocessedSteamData);
      this.sortGameList("name", true)
      this.printGameList()
   }

   sortGameList(objectHandle, isDecending) {
      this.gameListModel.sortList(objectHandle, isDecending)
   }
   printGameList() {
      this.gameListModel.printGameList()
   }

}
var testUser = "76561197979972334";
controller = new Controller()
controller.retriveSteamGames(testUser)
module.exports = Controller