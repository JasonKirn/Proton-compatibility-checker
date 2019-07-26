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
}

sortGameList = function (objectHandle, isDecending) {
   gameListModel.sortList(objectHandle, isDecending)
}