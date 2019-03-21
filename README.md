### Language Interpretation and Recognition Interface or (liri)

### Liri is a Command line based utility and can be run when the node server is running locally where liri is deployed
    before you start please make sure you have the all the components required to run this utility

###  Repository 
    This is the latest and only published repo
    
### How To Setup

    * To Setup download this from github 
    * You must install node binary for your laptop/desktop and get it on Node Js site[https://nodejs.org/]
    * After you have downloaded this module you would install the dependencies with - npm install
    * You would also have to sign up for spotify and place the Client Id and secret in a .env file on your laptop

    Now you are all setup

###  liri let's the user play from a selection of options provided in the program

    * Liri give you the following choices

        - concert-this < artist / band name>    (This choice lists all events related to the artist )

        - spotify-this-song < Song Name >       ( This will get the information about the song and link for song to play)

        - movie-this  <Name of the movie >     ( This will lookup up the movie. Currently you must use Initial Letters in Caps )

        - do-what-it-says                      (This option read the random.txt file and plays the uses first option as on of 
                                                3 above or 2nd option as the artist/band/song and runs it.  )

### How was this created

    * The program is a NodeJs javascript backend which currently runs only in command line

    * Built Using

        -  Javascript
        -  Node Package Manager
        -  Bash
        -  3rd Party NPM Packages (axios,)
        -  3rd Party API's ( spotify, bandsintown, imdbapi)
         
### Examples of commands in action

![concert-this](images/concert-this.png)

![spotify-this-song](images/spotify-this-song.png)

![movie-this](images/movie-this.png)

![do-what-it-says](images/do-what-it-says.png)
