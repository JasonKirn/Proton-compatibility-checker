class SteamModel {
   constructor(apiKey) {
      this.apiKey = apiKey;
      this.finalData;
   }

   retriveGames(steamId) {
      return new Promise((resolve, reject) => {
         //Loads http module
         const http = require("http");
         
         //Api call string
         var apiCall = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=" + this.apiKey.key + "&steamid=" + steamId + "&include_appinfo=1" + "&format=json";
         
         //HTTP Request
         http.get(apiCall, function (res) {

            //If we get any status code besides "OK" 200, we will print it out in the else statement to further understand what's going on with the api call
            if (res.statusCode == 200) {
               let unparsedData = "";
               let parsedData = '';
               
               //Retriving data from HTTP request, putting code "chunks" into unparsedData variable
               res.on('data', (chunks) => {
                  unparsedData += chunks;
               })
               
               //Runs after "end" is recived from HTTP request
               res.on('end', () => {
               
                  //Parses data into JSON format
                  parsedData = JSON.parse(unparsedData);

                  var finalData = parsedData.response.games;
                  
                  //If the data is not undefined, we know the apicall returned data, so we will resolve. Otherwise throw a rejection error
                  if (finalData) {
                     resolve(finalData);
                  }
                  else {
                     reject(Error('Something went wrong with getting the parsed data'));
                  }
               })
            }
            else {
               reject(Error("Invalid Status Code: " + res.statusCode));
            }
         });
      })
   }
}

module.exports = SteamModel;
