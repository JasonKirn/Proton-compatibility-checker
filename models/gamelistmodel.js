class Gameslist {
    constructor(){
        this.gameList = new Array();
    }

    sortList(isAscending) {
        //Will use isAscending boolean to determine if the list is to be sorted ascending or descending order
    }

    addGame(name, appid, imgurl, rating) {
        //adds a game to the gameList array
    }
}
//

//Holds only the neccessary info we need from each game in the api results called from steammodel
class Game {
    constructor(name, appid, imgurl, rating) {
        this.name = name;
        this.appid = appid;
        this.imgurl = imgurl;
        this.rating = rating;
    }
}
module.exports = Game;