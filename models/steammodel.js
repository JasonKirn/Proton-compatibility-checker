//Test code for Steam API below
const apikey = require("../keys/steamapikey.json");
const testUser = "76561197979972334";
const http = require("http");

function getGames(steamid, apikey) {
   let apicall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + apikey + "&steamid=" + steamid + "&format=json"

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
getGames("76561197979972334", apikey.key);