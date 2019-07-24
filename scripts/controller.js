var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json");


var SteamModel = require("../models/steammodel.js");
var GameListModel = require("../models/gamelistmodel.js");

var steamModel = new SteamModel(apikey);
var gameListModel = new GameListModel();


steamModel.retriveGames(testUser)
   .then(unprocessedSteamData => {gameListModel.importSteamGameList(unprocessedSteamData)})
   .catch(Error)