// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
let command=process.argv[2];
let search= process.argv.slice(3).join(" ");

console.log(command);
console.log(search);
// Then run a request with axios to the OMDB API with the movie specified
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