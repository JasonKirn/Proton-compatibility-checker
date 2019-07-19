class Gameslist {
    constructor(){
        this.gameList = new Array();
    }

    sortList(isAscending) {
        for (var i = 0; i < this.gameList.length; i++) {

        }
    }

    addGame(name, appid, imgurl, rating) {
        this.gameList.push(new Game(name, appid, imgurl,rating));
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

module.exports = Gameslist;