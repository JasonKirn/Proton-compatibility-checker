var testUser = "76561197979972334";
var apikey = require("../keys/steamapikey.json")

//Goals:

//1. Call the steammodel
//2. Send the results of the steammodel to the view for the user
var steamModel = require("../models/steammodel.js");

//console.log(steamModel.getGames(testUser, apikey.key))
//steamModelCall = steamModel.getGames(testUser, apikey.key)

/*const originalPromise = new Promise ((resolve, reject) => {
    //Maybe say if api is returning 200 status code, then resolve
    //because we know our model code works and any errors would
    //be on the network's part
    
    //check for SteamAPI status code 200
    if (1 == 1) {
        
        resolve(steamModel.getGames(testUser, apikey.key));
    }
    else {
        const reason = new Error('Could not connect to Steam API');
        reject(reason);
    }
})*/

//steamModel.getGames(testUser, apikey.key);

const printApiResults = function (phone) {
    const apiResults = steamModel.getGames(testUser, apikey.key);
    return Promise.resolve(apiResults)
}

const returnApiResultsToController = function () {
    originalPromise
        .then(console.log(printApiResults()))
        .catch(error => console.log(error.message))
}

//returnApiResultsToController();

function fetchUserSteamGames(user, theApiKey) {
    return new Promise((resolve, reject) => {
    
        steamModelCallResults = steamModel.getGames(user, theApiKey.key);


        setTimeout(() => {
            
            if (1 == 1) {
                console.log("We resolving")
                resolve(steamModelCallResults);
            }
            else {
                reject(Error('Something went wrong in the promise'));
            }
        }, 10000);
    });
}

/*fetchUserSteamGames(testUser, apikey)
    .then(steamModelCallResults => {
        console.log("Final: " + steamModelCallResults);
    })
*/

function callSteamModelAndDisplayResults() {

    var steamResultsPromise = new Promise((resolve, reject) => {
        
        //api call successful 
        if (steamModel.getGames(testUser, apikey.key) != undefined) {
            resolve('Promise resolved');
            console.log("Wew");
        }
        else {
            //api call unsuccessful
            reject(new Error('Steam api called failed, rejecting promise'));
        }
    }); 

    steamResultsPromise.then(function (result) {
        console.log(result);
    }, function(error) {
        console.log(error);
    });
    
    
    var steamModelCallResults = steamModel.getGames(testUser, apikey.key);

    //Need to async this
    //console.log("Test: " + steamModelCallResults);
}



/*steamModelCall.then(function(results){
    console.log(results);
});*/

//callSteamModelAndDisplayResults();