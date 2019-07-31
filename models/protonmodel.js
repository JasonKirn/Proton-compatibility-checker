class ProtonModel {
    /**
     * getRatings is a wrapper for appid. Taking an appid and returing the averageRating
     * @param {appid from Steam that will check the reports from Proton} appid 
     * @return {The average rating of a given ratings report}
     */
    async getRating(appid) {
        var reportList = await this.getRatingReports(appid);
        return this.averageRating(reportList);
    }
    /**
     * getRatingReports will retrive a ratings report from the unoffical ProtonDB
     * @param {appId from Steam that will check and return a list of preformance reports from the unoffical protondb API} appid 
     */
    getRatingReports(appid) {
        return new Promise((resolve, reject) => {
            const http = require("https");
            //URL for the GEt request for the unoffical proton db
            let getRequestURL = "https://protondb.max-p.me/games/" + appid + "/reports/"
            http.get(getRequestURL, function (res) {
                if (res.statusCode == 200) {
                    //Setting up variables for unparsed and parsed data
                    let unprasedData = "";
                    let parsedData = '';
                    //Retriving data from HTTP request, putting code "chunks" into data variable
                    res.on('data', (chunks) => {

                        unprasedData += chunks;

                    })
                    //Runs after "end" is recived from HTTP request
                    res.on('end', () => {
                        //Parses data (which is a json object) into parasedata variable
                        parsedData = JSON.parse(unprasedData);
                        if (parsedData) {
                            resolve(parsedData);
                        }
                        else {
                            reject(Error('Something went wrong with getting the parsed data'));
                        }
                    })
                }
                else {
                    reject(Error("Invalid Status Code: " + res.statusCode));
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
            totalRatings += this.convertRating(reportList[i].rating);
        }
        return (Math.round(totalRatings / maxNumberOfReports));
    }


    /**
     * Takes a rating from the proton DB and converts it to a numaric value to be averaged
     */
    convertRating(rating) {
        var convertedRating;
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
    /**
     * Takes a Game List object and assigns them their protonDb Rating given the appID
     * @param {A populated gameList from the SteamMOdel} gameList 
     */
    async processGameList(gameList) {
        //An array of promises used later for await
        var promises = new Array();
        for (var i = 0; i < gameList.getGameList().length; i++) {
            //adding the pending promise for getRating to the array of promises
            promises.push(this.getRating(gameList.getGame(i).getappid()));
        }
        for (var i = 0; i < gameList.getGameList().length; i++) {
            var rating;
            //Awaits for the promise its currently iterating through to resolve. Once it resolves it assigns the result to rating
            await promises[i]
                .then(result => rating = result);
            //assigns rating to game in the Game List
            gameList.getGame(i).setrating(rating);
        }
    }

}
module.exports = ProtonModel