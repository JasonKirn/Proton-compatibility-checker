//const apikey = require("../keys/steamapikey.json");
//const testUser = "76561197979972334";
apikey = require("../keys/steamapikey.json");
testUser = "76561197979972334";
console.log(apikey);
//Goals:

//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var steamModel = require("../models/steammodel");
//var modelCallResults = steamModel.getGames(testUser, apikey);

//var test = steamModel.test();

//console.log(modelCallResults);