require("dotenv").config();


var keys = require("./keys.js");
let command=process.argv[2];
let search= process.argv.slice(3).join(" ");




// function for getting the artist name user searches
var searchedArtist=function(artist){
  return artist.name;
}

//creating a function displays the result of searched songs user choose
// songname is being passed to var searchSongInfo
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var searchedSong = function (songName) {

spotify.search({ type: 'track', query:songName}, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  var songs=data.tracks.items;
  for(var i=0; i<songs.length;i++){
    console.log(i);
    console.log('Artist: ' +songs[i].artists.map(searchedArtist));
    console.log('Song Name: ' +songs[i].name);
    console.log('Song Preview: ' +songs[i].preview_url);
    console.log('Album Name: ' +songs[i].album.name);
    
  }
  //console.log(data);
  //console.log(JSON.stringify(data, null, 2));
  //console.log(data.tracks.items[0]);
});

}

// creating a function that takes in user's movie search argument and display the requsted attributes
var axios = require("axios");
//var searchedMovie=function(movieName){

//Script and API for searching the movie attributes
//let command=process.argv[2];
//let search= process.argv.slice(3).join(" ");

console.log(command);
console.log(search);
//runnin a request with axios to the OMDB API with the movie specified
axios.get(`http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`).then(
  function(response) {
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

// bandsinTownAPI

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
//let command=process.argv[2];
//let search= process.argv.slice(3).join(" ");

console.log(command);
console.log(search);

// Then run a request with axios to the bandsintown API with the concert specified
axios.get(`https://rest.bandsintown.com/artists/"${search}/events?app_id=codingbootcamp`).then(
  function(response) {
    console.log("Name of the venue is: " + response.data.venue);
    console.log("Venue location is: " + response.data.city);
    console.log("Date of the Event is: " + moment(response.data.datetime).format("MM/DD/YYYY"));
    
   
  }
 
);



//creating switch case
var choose = function (caseData, functionData) {
  switch (caseData) {
    case 'spotify-this-song':
      searchedSong(functionData);
      break;
      //case 'movie-this':
      //searchedSong(functionData);
      //break;
    default:
      console.log('LIRI does not know that');
  }
}

//var loadCmd = function (argOne, argTwo) {
  //choose(argOne, argTwo);
//};

//loadCmd(process.argv[2], process.argv[3]);