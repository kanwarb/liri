var liricfg = require('dotenv').config();
var keys = require("./keys.js");
var axios = require("axios");
var inquirer = require("inquirer");
var spotify = require("node-spotify-api");



inquirer
.prompt([
    {
        type: "list",
        message: "Please Make a selection",
        choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
        name: "mychoice"
    },
    {
        type: "input",
        message: "Enter Name ",
        name: "artist"
    }
])
.then(function (inquirerResponse) {

    if(inquirerResponse.mychoice === "concert-this"){
        concertThis(inquirerResponse.mychoice);
    }
    else{
        concertThis(inquirerResponse.mychoice);
    }

});

function concertThis(choice){
console.log(choice);
axios.get("https://rest.bandsintown.com/artists/" + choice.artist + "/events?app_id=codingbootcamp")
.then(
  function(response) {
console.log(response);
  console.log("Name of Venue : " + response.venue.name);
  console.log("Venue Location " + response.venue.city + ' ' + response.venue.region);
  console.log("Date of Event" );
  })
//otherwise log error - Follow the docs. 
.catch(function (error) {
    console.log('Hello')
    console.log(error);
  }
)
}