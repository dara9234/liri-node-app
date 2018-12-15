// fs is a core Node package for reading and writing files
const fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        //console.log(data);

        // Then split it by commas (to make it more readable)
        let dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        if (dataArr.length == 2) {
            choose(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            choose(dataArr[0]);
        }




    });



    //creating switch case
    var choose = function (caseData, functionData) {
        switch (caseData) {
            case 'spotify-this-song':
                searchedSong(functionData);
                break;
            case 'do-what-it-says':
                doWhatItSays();
                break;
            default:
                console.log('LIRI does not know that');
        }
    }

    var loadComand = function (argOne, argTwo) {
        choose(argOne, argTwo);
    };

    loadCommand(process.argv[2], process.argv[3]);

}