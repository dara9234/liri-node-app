// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
let search= process.argv.slice(2).join(" ");

// Then run a request with axios to the bandsintown API with the concert specified
axios.get(`https://rest.bandsintown.com/artists/"${search}/events?app_id=codingbootcamp`).then(
  function(response) {
    console.log("Name of the venue is: " + response.data.venue);
    console.log("Venue location is: " + response.data.city);
    console.log("Date of the Event is: " + moment(response.data.datetime).format("MM/DD/YYYY"));
    
   
  }
 
);

