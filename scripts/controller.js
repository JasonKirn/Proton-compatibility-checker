class Controller {
   constructor() {
      //Declerations for api key and all models for the backend
      this.apikey = require("../keys/steamapikey.json");
      this.SteamModel = require("../models/steammodel.js");
      this.ProtonModel = require("../models/protonmodel.js")
      this.GameListModel = require("../models/gamelistmodel.js");
      this.steamModel = new this.SteamModel(this.apikey);
      this.protonModel = new this.ProtonModel();

   }
   /**
    * Retrives Steam Games from Steamworks API given their userid
    * @param {Given user Steam ID} user 
    */
   async getSteamGameList(user) {
      return await this.steamModel.retriveGames(user)
         .catch(console.log(Error));
   }

   /**
    * Retrives Steamgames from Steamworks API given userid and assigns each game an average proton rating
    * @param {Given user Steam ID} user 
    */
   async retreiveGames(user) {
      let gameList = new this.GameListModel();
      let steamGameList = await this.getSteamGameList(user);
      gameList.importSteamGameList(steamGameList);
      await this.getProtonRatings(gameList);
      return gameList;
   }

   /**
    * Retrives proton ratings for the given gameList
    * @param {Populated Gamelist} gameList 
    */
   async getProtonRatings(gameList) {
      await this.protonModel.processGameList(gameList)
         .catch(console.log(Error));
   }

}
module.exports = Controller;