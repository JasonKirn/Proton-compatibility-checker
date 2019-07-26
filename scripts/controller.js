var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json");


<<<<<<< HEAD
//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var steamModel = require("../models/steammodel.js");
var protonModel = require("../models/protonmodel.js");

steamModel.getGames(testUser, apikey.key)
   .then(finalData => {protonModel.processGameList(finalData)})
=======
var SteamModel = require("../models/steammodel.js");
var GameListModel = require("../models/gamelistmodel.js");

var steamModel = new SteamModel(apikey);
var gameListModel = new GameListModel();

steamModel.retriveGames(testUser)
   .then(unprocessedSteamData => { proccessSteamData(unprocessedSteamData) })
>>>>>>> master
   .catch(console.log(Error))




proccessSteamData = function (unprocessedSteamData) {
   gameListModel.importSteamGameList(unprocessedSteamData);
   sortGameList("name", true)
}

sortGameList = function (objectHandle, isDecending) {
   gameListModel.sortList(objectHandle, isDecending)
}