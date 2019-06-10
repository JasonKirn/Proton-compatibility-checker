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
         //sortByPlaytime(parseddata.response.games)
         return (parseddata.response.games);
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
sortByPlaytime = function (gameList) {
   quickSort(gameList, 0, gameList.length, "playtime_forever")
}

quickSort = function (array, startOfArray, endOFArray, objectName) {
   if (startOfArray < endOFArray) {
      let piviotPosition = partition(array, startOfArray, endOFArray, objectName)
      quickSort(array, startOfArray, piviotPosition - 1, objectName)
      quickSort(array, piviotPosition, endOFArray, objectName)
   }
}

partition = function (array, startOfArray, endOFArray, objectName) {
   let j = startOfArray + 1
   let piviot = array[startOfArray][objectName]
   for (i = startOfArray; i <= endOFArray; i++) {
      if (array[i][objectName] < piviot) {
         swap(array, j, i)
         j++
      }
   }
   swap (array, array[startOfArray], array[j - 1] )
   return j - 1
}

swap = function (array, index1, index2) {
   let temp = array[index1]
   array[index1] = array[index2]
   array[index2] = temp
}