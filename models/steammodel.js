//Test code for Steam API below
const apikey = require("../keys/steamapikey.json");
const testUser = "76561197979972334";
const http = require("http");

function getGames() {
   var games = http.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey.key + "&steamid=76561197960434622" + "&format=json", function(res) {
      var jsonresponse = JSON.parse(res);
      console.log(jsonresponse.picture);
   });
}
getGames();