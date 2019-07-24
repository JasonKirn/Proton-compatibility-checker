class Gameslist {
    constructor() {
        this.gameList = new Array();
    }

    importSteamGameList(gameListData) {

        for (var i = 0; i < gameListData.length; i++) {
            this.addGame(gameListData[i].name, gameListData[i].appid, gameListData[i].img_logo_url, null)
        }
        
        this.printGameList();

    }

    sortList(objectHandle, decendingTrue) {
        var left = 0;
        var right = this.gameList.length
        if (this.gameList.length > 1) {
            index = partition(this.gameList, left, right, objectHandle, decendingTrue); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(this.gameList, left, index - 1, objectHandle, decendingTrue);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(this.gameList, index, right, objectHandle, decendingTrue);
            }
        }
        function partition(GameList, left, right, objectHandle, decendingTrue) {
            var pivot = GameList[Math.floor((right + left) / 2)][objectHandle], //middle element
                i = left, //left pointer
                j = right; //right pointer
            while (i <= j) {
                //If decendingTrue is true, sorts by decending order
                if (decendingTrue) {
                    while (GameList[i][objectHandle] < pivot) {
                        i++;
                    }
                    while (GameList[j][objectHandle] > pivot) {
                        j--;
                    }
                }
                //else asecending
                else {
                    while (GameList[i][objectHandle] > pivot) {
                        i++;
                    }
                    while (GameList[j][objectHandle] < pivot) {
                        j--;
                    }
                }
                if (i <= j) {
                    swap(GameList, i, j); //sawpping two elements
                    i++;
                    j--;
                }
            }
            return i;
        }

        swap = function (array, index1, index2) {
            let temp = array[index1]
            array[index1] = array[index2]
            array[index2] = temp
        }
    }

    addGame(name, appid, imgurl, rating) {
        this.gameList.push(new Game(name, appid, imgurl, rating));
    }

    getGameList() {
        return this.gameList;
    }

    printGameList() {
        console.log(this.gameList)
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