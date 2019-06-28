var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json")

//Goals:

//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var steamModel = require("../models/steammodel.js");
steamModel.getGames(testUser, apikey.key)
   .then(finalData => {"Here we go:" + console.log(finalData)})
   .catch(console.log(Error))
