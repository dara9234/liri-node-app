require("dotenv").config();


var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");

// spotifyAPI
// function for getting the artist name user searches
var searchedArtist = function (artist) {
  return artist.name;
}

//creating a function displays the result of searched songs user choose
// songname is being passed to var searchSongInfo
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var searchedSong = function (songName) {

  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log('Artist: ' + songs[i].artists.map(searchedArtist));
      console.log('Song Name: ' + songs[i].name);
      console.log('Song Preview: ' + songs[i].preview_url);
      console.log('Album Name: ' + songs[i].album.name);

    }
    //console.log(data);
    //console.log(JSON.stringify(data, null, 2));
    //console.log(data.tracks.items[0]);
  });

}

// OdmbAPI
// creating a function that takes in user's movie search argument and display the requsted attributes

var searchedMovie = function () {

  //Script and API for searching the movie attributes
  //let command=process.argv[2];
  let search = process.argv.slice(3).join("+");

  //console.log(command);
  //console.log(search);
  //runnin a request with axios to the OMDB API with the movie specified
  axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`).then(
    function (response) {
      console.log("Title of the movie is: " + response.data.Title);
      console.log("Year the movie came out is: " + response.data.Year);
      console.log("The movie's rating is: " + response.data.imdbRating);
      console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings[1].Value);
      console.log("Country where the movie was produced is: " + response.data.Country);
      console.log("Language of the movie is: " + response.data.Language);
      console.log("Plot of the movie is: " + response.data.Plot);
      console.log("Actors in the movie are: " + response.data.Actors);
    }

  );
}
// bandsinTownAPI

var getConcertInfo = function () {
  //let command=process.argv[2];
  let search = process.argv.slice(3).join("+");

  //console.log(command);
  //console.log(search);

  // Then run a request with axios to the bandsintown API with the concert specified
  axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`).then(
    function (response) {
      console.log("Name of the venue is: " + response.data[0].venue.name);
      console.log("Venue location is: " + response.data[1].venue.city);
      console.log("Date of the Event is: " + moment(response.data[2].datetime).format("MM/DD/YYYY"));


    }

  );

}

//creating do-what-it-says command's function

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

}
//creating switch case
var choose = function (caseData, functionData) {
  switch (caseData) {
    case 'spotify-this-song':
      searchedSong(functionData);
      break;
    case 'concert-this':
      getConcertInfo(functionData);
      break;
    case 'movie-this':
      searchedMovie(functionData);
      break;
    case 'do-what-it-says':
      doWhatItSays();
      break;
    default:
      console.log('LIRI does not know that');
  }
}
//function to run the commands
var loadCommand = function (argOne, argTwo) {
  choose(argOne, argTwo);
};


//function takes the argument
loadCommand(process.argv[2], process.argv.slice(3).join(" "));

