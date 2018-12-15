// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
let command=process.argv[2];
let search= process.argv.slice(3).join(" ");


console.log(command);
console.log(search);

// Then run a request with axios to the bandsintown API with the concert specified
axios.get(`https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`).then(
  function(response) {

    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
    console.log(JSON.stringify(data, null, 2));
    console.log("Name of the venue is: " + response.data.venue.name);
    console.log("Venue location is: " + response.data.venue.city);
    console.log("Date of the Event is: " + moment(response.data.datetime).format("MM/DD/YYYY"));
  });
  

    
    
   
  
 


