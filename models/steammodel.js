//Test code for Steam API below
const apikey = require("../keys/steamapikeys.json");
const testUser = "76561197979972334"
function getGames() {
   var games = $.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey.key + "&steamid=76561197960434622" + testUser + "&format=json");
   console.log(games);
}
class {

}
  
