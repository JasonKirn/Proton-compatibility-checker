/** getGames is a function which returns gamesretrived from Steamworks API
 * @param {steam id is the user id to retrive information from} steamid
 * @param {apikey is a string for Steamworks API access} apikey
 */

/**
 * quickSortGames is a quicksort function based on object handling or if decending or ascending
 * @param {gameList retrived from Steamworks API} gameList 
 * @param {Left side of the array for sorting} left 
 * @param {Right side of the array for sorting} right 
 * @param {objectHandle for what it sorts by} objectHandle 
 * @param {Set if to sort in decending order} decendingTrue 
 */
/**
 * partition is a helper function for quickwork, partioning the gameList to sort it by the objectHandle
 * @param {Left side of the array for sorting} left 
 * @param {Right side of the array for sorting} right 
 * @param {objectHandle for what it sorts by} objectHandle 
 * @param {Set if to sort in decending order} decendingTrue 
 */

class SteamModel {
   constructor(apiKey) {
      this.apiKey = apiKey;
      this.finalData;
   }

   retriveGames(steamid) {
      return new Promise((resolve, reject) => {
         //Loads http module
         const http = require("http");
         //Api call string
         var apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.apiKey.key + "&steamid=" + steamid + "&include_appinfo=1" + "&format=json"
         //HTTP Request

         http.get(apicall, function (res) {
            if (res.statusCode == 200) {
               //Setting up variables for unparsed and parsed data
               let data = "";
               let parseddata = '';
               //Retriving data from HTTP request, putting code "chunks" into data variable
               res.on('data', (chunks) => {
                  data += chunks;
               })
               //Runs after "end" is recived from HTTP request
               res.on('end', () => {
                  //Parses data (which is a json object) into parasedata variable
                  parseddata = JSON.parse(data);

                  var finalData = parseddata.response.games;
                  
                  if (finalData) {
                     resolve(finalData);
                  }
                  else {
                     reject(Error('Something went wrong with getting the parsed data'))
                  }
               })
            }
            else {
               reject(Error("Invalid Status Code: " + res.statusCode))
            }
         });
      })
   }
}

module.exports = SteamModel
