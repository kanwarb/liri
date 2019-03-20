var liricfg = require('dotenv').config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");

var myargs = process.argv;
var myChoice = process.argv[2];
var myoption = process.argv[3];
var artistName;


if (process.argv[2] === undefined && process.argv[3] === undefined) {
    console.log("Please make one of the following selections");
    console.log("concert-this <artist> or spotify-the-song <song Title> or  movie <movie Name> ");
}
switch (myChoice) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThatSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
}

function getMyOptions() {
    if (myChoice === "spotify-this-song") {
        for (i = 4; i < myargs.length; i++) {
            myoption += " " + myargs[i];
        }
    }
    else {
        for (i = 4; i < myargs.length; i++) {
            myoption += "+" + myargs[i];
        }
    }
    return myoption;
}

function concertThis() {
    myoption = getMyOptions();
    if (myoption === undefined || myoption === '') {
        console.log("node liri.js concert-this <artist/ band name>")
    }
    else {
        axios.get("https://rest.bandsintown.com/artists/" + myoption + "/events?app_id=codingbootcamp")
            .then(function (response) {
                // console.log(response);
                response.data.forEach(element => {
                    console.log("Name of Venue : " + element.venue["name"]);
                    console.log("Venue Location " + element.venue["city"] + ' ' + element.venue["region"]);
                    console.log("Date of Event " + moment(element.datetime).format("MM/DD/YYYY"));

                });
            });
    }
}

function spotifyThatSong() {

    var spotify = new Spotify(keys.spotify);
    if (process.argv[3] === undefined) {
        myoption = "The Sign";
    }
    else {
        myoption = getMyOptions();
    }

    spotify.search({ type: 'track', query: myoption }, function (e, data) {
        if (e) {
            return console.log("Error occured: " + e);
        }
        for (i = 0; i < data.tracks.items.length; i++) {
            if (data.tracks.items[i].name === myoption) {

                console.log("Artists       : ", data.tracks.items[i].album.artists[0].name);
                console.log("The Song      : ", data.tracks.items[i].name);
                console.log("Preview link  : ", data.tracks.items[i].preview_url);
                console.log("Song Album    : ", data.tracks.items[i].album.name);
                //console.log(data.tracks);
            }
        }

    });
}


function movieThis() {
    if (process.argv[3] === undefined) {
        myoption = "Mr. Nobody";
    }
    else {
        myoption = getMyOptions();
    }
    axios.get("http://www.omdbapi.com/?t=" + myoption + "&apikey=trilogy")
        .then(
            function (response) {
                if (myoption !== "Mr. Nobody") {
                    myoption = StringOption();
                }

                if (response.data.Title.trim() === myoption) {
                    console.log("Title of the movie         : " + response.data.Title);
                    console.log("Year the movie came out    : " + response.data.Year);
                    console.log("IMDB Rating of the movie   : " + response.data.imdbRating);
                    for (j = 0; j < response.data.Ratings.length; j++) {
                        if (response.data.Ratings[j].Source.trim() === "Rotten Tomatoes") {
                            console.log("Rotten Tomatos Rating " + response.data.Ratings[j].Value);
                        }
                    }

                }
            }
        )
}
function StringOption() {
    var myOptArr = myoption.split("+");
     if(myOptArr.length > 1){
         myoption = myOptArr[0];
         console.log(myoption);
         for(i=1;i < myOptArr.length;i++){
             myoption+= " " + myOptArr[i];
         }
         return myoption.trim();
     }
 }