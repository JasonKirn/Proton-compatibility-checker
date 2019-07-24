var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json")


var SteamModel = require("../models/steammodel.js");


var steamModel = new SteamModel(apikey)

steamModel.retriveGames(testUser)
   .then(unprocessedSteamData => {console.log(unprocessedSteamData)})
   .catch(Error)
