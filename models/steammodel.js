var iterations = 0

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
         console.log(sortByPlaytime(parseddata.response.games))
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
   return quickSort(gameList, 0, gameList.length - 1, "playtime_forever", false)
}

function partition(array, left, right, objectHandle, decendingTrue) {
   var pivot = array[Math.floor((right + left) / 2)][objectHandle], //middle element
      i = left, //left pointer
      j = right; //right pointer
   while (i <= j) {
      if (decendingTrue) {
         while (array[i][objectHandle] < pivot) {
            i++;
         }
         while (array[j][objectHandle] > pivot) {
            j--;
         }
      }
      else {
         while (array[i][objectHandle] > pivot) {
            i++;
         }
         while (array[j][objectHandle] < pivot) {
            j--;
         }
      }
      if (i <= j) {
         swap(array, i, j); //sawpping two elements
         i++;
         j--;
      }
   }
   return i;
}

function quickSort(array, left, right, objectHandle, decendingTrue) {
   var index;
   if (array.length > 1) {
      index = partition(array, left, right, objectHandle, decendingTrue); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
         quickSort(array, left, index - 1, objectHandle, decendingTrue);
      }
      if (index < right) { //more elements on the right side of the pivot
         quickSort(array, index, right, objectHandle, decendingTrue);
      }
   }
   return array;
}

swap = function (array, index1, index2) {
   let temp = array[index1]
   array[index1] = array[index2]
   array[index2] = temp
}