# liri-node-app
Liri Week 10


### Description of the Liri-app

I've created an app LIRI which is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data based on these four commands:

  * `concert-this`

  * `spotify-this-song`

  * `movie-this`

  * `do-what-it-says`

  ### You need to spicify the search term after each command for example, if you are searchig for a movie, you will write:

  * node liri.js movie-this The Lion King 


### Technologies

* Javascript
* [Node.js]Download the latest version of Node https://nodejs.org/en/
* NPMs
 [Spotify](https://www.npmjs.com/package/node-spotify-api)
 [Bands In Town](http://www.artists.bandsintown.com/bandsintown-api)
 [OMDB API](http://www.omdbapi.com)
 [Moment](https://www.npmjs.com/package/moment)
 [DotEnv](https://www.npmjs.com/package/dotenv)


## Getting Started

You will need to fork this repository and pull it to your local drive. Once this is done you will need to supply your own `.env` file for it to work. You will be using the spotify api keys in the `.env` file. You will also need to install the npm packages stated in the package.json file. Please do the following to create the  file named `.env`, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
```

### What each commands will display

1. `node liri.js concert-this <artist/band name here>`

   * This will show the following information about the song in your terminal/bash window

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then Liri program will default to "The Sign" by Ace of Base.


3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesnt type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.


### Built with

* Visual Studio Code editor
- - -

* [project Video](https://drive.google.com/file/d/1rr5nKAPk6dcD6DHpSIEZOZ-WJQTRSCdf/view)

### Author

* [Darakhshan Ahmed](https://dara9234.github.io/Bootstrap-Portfolio/)

**Good Luck!**