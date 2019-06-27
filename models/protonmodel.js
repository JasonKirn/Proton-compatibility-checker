exports.getRating = function (appid) {
    const http = require("https");
    let getRequestURL = "https://protondb.max-p.me/games/" + appid + "/reports/"
    let getRequest = http.get(getRequestURL, function (res) {
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
            console.log(averageRating(parseddata))
        })
    })
}

averageRating = function (reportList) {
    var maxNumberOfReports = 5;
    var addedReportRatings = 0;
    if (reportList.length < maxNumberOfReports) {
        maxNumberOfReports = reportList.length;
    }
    for(i = 0; i < maxNumberOfReports; i++ ) {
        addedReportRatings += convertRating(reportList[i].rating)
    }
    return (Math.round(addedReportRatings/maxNumberOfReports))
}

convertRating = function (rating) {
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