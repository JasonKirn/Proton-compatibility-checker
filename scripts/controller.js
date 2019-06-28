var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json")

//Goals:

//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var steamModel = require("../models/steammodel.js");
var protonModel = require("../models/protonmodel.js");


function callSteamModelAndDisplayResults() {

    var steamResultsPromise = new Promise((resolve, reject) => {
        
        //api call successful 
        if (steamModel.getGames(testUser, apikey.key) != undefined) {
            //resolve();
            console.log("Wew");
        }

        //api call unsuccessful
        reject(new Error('Steam api called failed, rejecting promise'));
    });

    steamResultsPromise.then(function (result) {
        console.log(result);
    }, function(error) {
        console.log(error);
    });
    
    
    var steamModelCallResults = steamModel.getGames(testUser, apikey.key);

    //Need to async this
    console.log("Test: " + steamModelCallResults);
}

//callSteamModelAndDisplayResults();