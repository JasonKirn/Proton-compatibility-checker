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
            console.log(parseddata.rating)
        })
    })
}