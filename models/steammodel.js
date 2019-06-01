//Test code for Steam API below
const apikey = require("../keys/steamapikey.json");
const testUser = "76561197979972334";
const http = require("http");

function getGames(steamid, apikey) {
   let apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey + "&steamid=" + steamid + "&include_appinfo=1" + "&format=json"

   let games = http.get(apicall, function(res) {

      let data = "";
      let procceddata = '';

      res.on('data', (chunks) => {

         data += chunks;

      })
      res.on('end', () => {

         procceddata = JSON.parse(data);
         console.log(procceddata.response.games);
         
      })
   });
}

//Param 1: Game list we are sorting
//Param 2: What we are sorting on
//Param 3: Ascending or Descending

//Options to sort on:
//Title
//Number hours played (minutes)

function masterSortingFunction() {
   //Switch

   //Sorts will depend on what the user wants sorted

   //Sort 1

   //Call sort 1 function

   //Sort 2

   //Call sort 2 function

   //Sort 3

   //Call sort 3 function
}

getGames("76561197979972334", apikey.key);