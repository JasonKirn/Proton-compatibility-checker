class ProtonModel {

    async getRating(appid) {
        var reportList = await this.getRatingReports(appid)
        this.averageRating(reportList)
    }

    getRatingReports(appid) {
        return new Promise((resolve, reject) => {
            const http = require("https");
            //URL for the GEt request for the unoffical proton db
            let getRequestURL = "https://protondb.max-p.me/games/" + appid + "/reports/"
            http.get(getRequestURL, function (res) {
                if (res.statusCode == 200) {
                    //Setting up variables for unparsed and parsed data
                    let data = "";
                    let parseddata = '';
                    //Retriving data from HTTP request, putting code "chunks" into data variable
                    res.on('data', (chunks) => {

                        data += chunks;

                    })
                    //Runs after "end" is recived from HTTP request
                    res.on('end', () => {
                        //Parses data (which is a json object) into parasedata variable
                        parseddata = JSON.parse(data);
                        if (parseddata) {
                            resolve(parseddata)
                        }
                        else {
                            reject(Error('Something went wrong with getting the parsed data'))
                        }
                    })
                }
                else {
                    reject(Error("Invalid Status Code: " + res.statusCode))
                }
            })
        })
    }

    /**
     * Takes a given list of reports from the unoffical proton db API takes the average of (at most) the 5 latest reports. Returning
     * an average rating
     */
    averageRating(reportList) {
        //Max numbers of reports to be used in average
        var maxNumberOfReports = 5;
        var totalRatings = 0;
        //If the list of reports has less then 5 reports it will use the total number of reports as the Maxium number of reports instead
        if (reportList.length < maxNumberOfReports) {
            maxNumberOfReports = reportList.length;
        }
        for (var i = 0; i < maxNumberOfReports; i++) {
            //Adds the number of ratings together
            totalRatings += this.convertRating(reportList[i].rating)
        }
        return (Math.round(totalRatings / maxNumberOfReports))
    }


    /**
     * Takes a rating from the proton DB and converts it to a numaric value to be averaged
     */
    convertRating(rating) {
        var convertedRating
        switch (rating) {
            case "Platinum":
                convertedRating = 5;
                break;
            case "Gold":
                convertedRating = 4;
                break;
            case "Silver":
                convertedRating = 3;
                break;
            case "Bronze":
                convertedRating = 2;
                break;
            case "Borked":
                convertedRating = 1;
                break;
        }
        return convertedRating;
    }

    async processGameList(gameList) {
        var i = 0;
        var Promises = new Array()
        for (var i = 0; i < gameList.getGameList().length; i++) {
            Promises.push(this.getRating(gameList.getGame(i).getappid()))
        }
        for (var i = 0; i < gameList.getGameList().length; i++) {
            var rating
            await Promises[i]
                .then(result => rating = result)
            gameList.getGame(i).setrating(rating)
        }
        gameList.printGameList()
    }

}
module.exports = ProtonModel