require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var fence = '\n~~~~~*%*~~~~~*%*~~~~~*%*~~~~~*%*~~~~~*%*~~~~~*%*~~~~~*%*~~~~~*%*~~~~~\n'
var command = process.argv[2];
var searchTerm = process.argv.slice(3).join(' ');

// each search logs the results in log.txt
function logResults() {
    fs.appendFile("log.txt", results + fence, function(err) {
    if(err) {throw err};
    console.log(results);
    });
};

// bandsintown API
function concertThis() {
    if(!searchTerm){
        searchTerm = "Tycho"
    }
    axios.get(`https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`)
    .then(function(response){
        //take the first response
        var concert = response.data[0];
        results = [
            "Artist: " + searchTerm,
            "Venue: " + concert.venue.name,
            "Location: " + concert.venue.city + ", " + concert.venue.country,
            "Date: " + moment(concert.datetime).format('MM/DD/YYYY'),
            "Source: BandsInTown"
        ].join("\n\n");
        logResults();
    })
};

// Spotify API
function spotifyThis() {
    if(!searchTerm){
        searchTerm = "I Think It Is Beautiful That You Are 256 Colors Too";
    };
    spotify.search({ type: 'track', query: searchTerm })
    .then(function(response) {
        var song = response.tracks.items[0];
        results = [
            "Artist: " + song.album.artists[0].name,
            "Song Title: " + song.name,
            "Preview Link: " + song.href,
            "Album: " + song.album.name,
            "Source: Spotify"
        ].join("\n\n");
        logResults();
    })
    .catch(function(err) {
        console.log(err);
    });
};

// OMDB API
function movieThis() {
    if(!searchTerm){
        searchTerm = "Spirited Away";
    };
    axios.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`)
    .then(function(response){
        var movie = response.data;
        results = [
            "Movie Title: " + movie.Title,
            "Year: " + movie.Year,
            "IMDB Rating: " + movie.imdbRating,
            "Metascore: " + movie.Metascore,
            "Country: " + movie.Country,
            "Language: " + movie.Language,
            "Plot: " + movie.Plot,
            "Actors: " + movie.Actors,
            "Source: OMDB"
        ].join("\n\n");
        logResults();
    });
};

// do what it says
function doWhatitSays() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if(err){
            throw err;
        };
        var randomData = data.split(",");
        command = randomData[0];
        searchTerm = randomData[1];
        LIRI();
    });
};

function LIRI() {
    if(command === "concert-this"){
        concertThis(searchTerm);
    } else if (command === "spotify-this-song"){
        spotifyThis(searchTerm);
    } else if (command === "movie-this"){
        movieThis(searchTerm);
    } else if (command === "do-what-it-says"){
        doWhatitSays(searchTerm);
    } else {
        console.log(`${command} is not a command. Please check your spelling and try again.`)
    };
}

LIRI();