class Gameslist {
    constructor() {
        this.gameList = new Array();
    }

    importSteamGameList(gameListData) {

        for (var i = 0; i < gameListData.length; i++) {
            this.addGame(gameListData[i].name, gameListData[i].appid, gameListData[i].img_logo_url, null)
        }
    }

    sortList(objectHandle, decendingTrue) {
        var left = 0;
        var right = this.gameList.length-1
        this.quickSort(left, right, objectHandle, decendingTrue)
    }

    quickSort(left, right, objectHandle, decendingTrue) {
        var index;
        if (this.gameList.length > 2) {
            index = this.partition(left, right, objectHandle, decendingTrue); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(left, index - 1, objectHandle, decendingTrue);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(index, right, objectHandle, decendingTrue);
            }
        }
    }

    partition(left, right, objectHandle, decendingTrue) {
        var pivot = this.gameList[Math.floor((right + left) / 2)][objectHandle], //middle element
            i = left, //left pointer
            j = right; //right pointer

        while (i <= j) {
            //If decendingTrue is true, sorts by decending order
            if (decendingTrue) {
                while (this.getUppercaseStringValue(this.gameList[i][objectHandle]) < this.getUppercaseStringValue(pivot)) {
                    i++;
                }
                while (this.getUppercaseStringValue(this.gameList[j][objectHandle]) > this.getUppercaseStringValue(pivot)) {
                    j--;
                }
            }
            //else asecending
            else {
                while (this.getUppercaseStringValue(this.gameList[i][objectHandle]) > this.getUppercaseStringValue(pivot)) {
                    i++;
                }
                while (this.getUppercaseStringValue(this.gameList[j][objectHandle]) < this.getUppercaseStringValue(pivot)) {
                    j--;
                }
            }
            if (i <= j) {
                this.swap(this.gameList, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    swap(array, index1, index2) {
        let temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
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
    getUppercaseStringValue(string) {
        if (typeof string === 'string' || string instanceof String) {
            return string.toUpperCase()
        }
        else return string
        
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