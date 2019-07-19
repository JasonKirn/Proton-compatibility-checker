/** getGames is a function which returns gamesretrived from Steamworks API
 * @param {steam id is the user id to retrive information from} steamid
 * @param {apikey is a string for Steamworks API access} apikey
 */



/* exports.getGames = function (steamid, apikey) {
   return new Promise((resolve, reject) => {
      console.log("This should print First");
      //Loads http module
      const http = require("http");
      //Api call string
      var apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey + "&steamid=" + steamid + "&include_appinfo=1" + "&format=json"
      //HTTP Request

      var testVar = "This should print third";

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
               //console.log(parseddata);
               console.log("This should print 2nd");
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

*/
/**
 * quickSortGames is a quicksort function based on object handling or if decending or ascending
 * @param {gameList retrived from Steamworks API} gameList 
 * @param {Left side of the array for sorting} left 
 * @param {Right side of the array for sorting} right 
 * @param {objectHandle for what it sorts by} objectHandle 
 * @param {Set if to sort in decending order} decendingTrue 
 */
function quickSortGames(gameList, left, right, objectHandle, decendingTrue) {
   var index;
   if (gameList.length > 1) {
      index = partition(gameList, left, right, objectHandle, decendingTrue); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
         quickSort(gameList, left, index - 1, objectHandle, decendingTrue);
      }
      if (index < right) { //more elements on the right side of the pivot
         quickSort(gameList, index, right, objectHandle, decendingTrue);
      }
   }
   return gameList;
}
/**
 * partition is a helper function for quickwork, partioning the gameList to sort it by the objectHandle
 * @param {Left side of the array for sorting} left 
 * @param {Right side of the array for sorting} right 
 * @param {objectHandle for what it sorts by} objectHandle 
 * @param {Set if to sort in decending order} decendingTrue 
 */
function partition(GameList, left, right, objectHandle, decendingTrue) {
   var pivot = GameList[Math.floor((right + left) / 2)][objectHandle], //middle element
      i = left, //left pointer
      j = right; //right pointer
   while (i <= j) {
      //If decendingTrue is true, sorts by decending order
      if (decendingTrue) {
         while (GameList[i][objectHandle] < pivot) {
            i++;
         }
         while (GameList[j][objectHandle] > pivot) {
            j--;
         }
      }
      //else asecending
      else {
         while (GameList[i][objectHandle] > pivot) {
            i++;
         }
         while (GameList[j][objectHandle] < pivot) {
            j--;
         }
      }
      if (i <= j) {
         swap(GameList, i, j); //sawpping two elements
         i++;
         j--;
      }
   }
   return i;
}

swap = function (array, index1, index2) {
   let temp = array[index1]
   array[index1] = array[index2]
   array[index2] = temp
}

//class gamesList
//we send all the game objects, to gamesList and here we organize into an array or container and have functions to sort it as requested per the user


//class game 
//extracting the neccesary data for each game from the raw data, into a game object



class SteamModel {
   constructor(apiKey) {
      this.apiKey = apiKey
   }

   retriveGames(steamid) {
      return new Promise((resolve, reject) => {
         console.log("This should print First");
         //Loads http module
         const http = require("http");
         //Api call string
         var apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.apiKey.key + "&steamid=" + steamid + "&include_appinfo=1" + "&format=json"
         //HTTP Request
         console.log(apicall);

         var testVar = "This should print third";

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
                  //console.log(parseddata);
                  console.log("This should print 2nd");
                  var finalData = parseddata.response.games;
                  
                  if (finalData) {
                     resolve(this.gameList = finalData);
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
//module.exports = newClassName

//var steamModel = new SteamModel("79841646714619864")
//steamModel.retriveGames("7213773712")