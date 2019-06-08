exports.getGames = function (steamid, apikey) {
   //Loads http module
   const http = require("http");
   //Api call string
   var apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey + "&steamid=" + steamid + "&include_appinfo=1" + "&format=json"
   //HTTP Request
   let gamesRequest = http.get(apicall, function (res) {
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
         return(parseddata.response.games);

      })
   });
}


//Param 1: Game list we are sorting
//Param 2: What we are sorting on
//Param 3: Ascending or Descending

//Options to sort on:
//Title
//Number hours played (minutes)

function gameNameSorting(gamelist, isDecsending) {
   //gamename sorting
}

function playTimeSorting(gamelist, isDecsending) {
   //playtime sorting
}

function masterSortingFunction(gamelist, sorttype, isDecsending) {
   switch (sorttype) {
      case "gameName":
         gameNameSorting(gamelist, isDecsending);
         break;
      case "playTime":
         playTimeSorting(gamelist, isDecsending)
         break;
   }
}

//getGames(testUser, apikey.key);