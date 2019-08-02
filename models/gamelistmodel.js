class Gameslist {
    constructor() {
        this.gameList = new Array();
    }

    importSteamGameList(gameListData) {

        for (var i = 0; i < gameListData.length; i++) {
            this.addGame(gameListData[i].name, gameListData[i].appid, gameListData[i].img_logo_url, null);
        }

    }

    sortList(objectHandle, descendingTrue) {

        var left = 0;
        var right = this.gameList.length-1;
        this.quickSort(left, right, objectHandle, descendingTrue);

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

    partition(left, right, objectHandle, descendingTrue) {

        var pivot = this.gameList[Math.floor((right + left) / 2)][objectHandle], //middle element
            i = left, //left pointer
            j = right; //right pointer

        while (i <= j) {
            //If descendingTrue is true, sorts by decending order
            if (descendingTrue) {

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
                
                this.swap(this.gameList, i, j); //swapping two elements
                i++;
                j--;

            }
        }
        return i;
    }

    swap(array, index1, index2) {
        
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

    }


    addGame(name, appid, imgurl, rating) {
        this.gameList.push(new Game(name, appid, imgurl, rating));
    }

    getGameList() {
        return this.gameList;
    }

    printGameList() {
        console.log(this.gameList);
    }

    getUppercaseStringValue(string) {

        if (typeof string === 'string' || string instanceof String) {
            return string.toUpperCase();
        }
        else return string;
        
    }
    getGame(index) {
        return this.gameList[index];
    }
}

//Holds only the neccessary info we need from each game in the api results called from steammodel.js
class Game {
    constructor(name, appId, imgUrl, rating) {
        this.name = name;
        this.appId = appId;
        this.imgUrl = imgUrl;
        this.rating = rating;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name; 
    }
    getappid() {
        return this.appId;
    }
    setappid(appId) {
        this.appId = appId;
    }
    getimgurl() {
        return this.imgUrl;
    }
    setimgurl(imgUrl) {
        this.imgUrl = imgUrl;
    }
    getrating() {
        return this.rating;
    }
    setrating(rating) {
        this.rating = rating;
    }
}

module.exports = Gameslist;