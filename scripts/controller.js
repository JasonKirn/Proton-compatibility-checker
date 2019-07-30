class Controller {
   constructor() {
      this.apikey = require("../keys/steamapikey.json");
      this.SteamModelObject = require("../models/steammodel.js");
      this.GameListModelObject = require("../models/gamelistmodel.js");
      this.steamModel = new SteamModelObject(this.apikey)
      this.gameListModel = new GameListModelObject();
   }
   retriveSteamGames(user) {
      this.steamModel.retriveGames(user)
         .then(unprocessedSteamData => { proccessSteamData(unprocessedSteamData) })
         .catch(console.log(Error))

      proccessSteamData = function (unprocessedSteamData) {
         gameListModel.importSteamGameList(unprocessedSteamData);
         this.sortGameList("name", true)
      }
   }

   sortGameList(objectHandle, isDecending) {
      this.gameListModel.sortList(objectHandle, isDecending)
   }

}
