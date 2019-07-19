var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json")

//Goals:

//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var SteamModel = require("../models/steammodel.js");
/*steamModel.getGames(testUser, apikey.key)
   .then(finalData => {"Here we go:" + console.log(finalData)})
   .catch(console.log(Error))
*/
var steamModel = new SteamModel(apikey)
steamModel.retriveGames(testUser)
   .then(finalData => { steamModel.pushGameToGameListModel(finalData) })
   .catch(console.log(Error))
console.log(steamModel.apiKey)