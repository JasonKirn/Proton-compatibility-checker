//Test code for Steam API below
const apikey = require("../keys/steamapikey.json");
const testUser = "76561197979972334"
//function getGames() {
//}

function getGames() {
   var games = $.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey.key + "&steamid=76561197960434622" + "&format=json");
   console.log(games);
}
getGames();