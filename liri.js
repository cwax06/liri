// require packages_____________________________________________
var myTwitter = require('./my-twitter');
var myOMDB = require('./my-omdb');
var mySpotify = require('./my-spotify');
var myFileReaderWriter = require('./my-file-reader-writer');
// end require packages_________________________________________

// get the inputs from the process.argv_________________________
var inputs = process.argv;
var command = inputs[2];
var term = inputs[3];
// end of inputs________________________________________________

// global variables_____________________________________________
var randomTextFile = 'random.txt';
var logFile = 'log.txt';
// end global variables_________________________________________

// switch to decide what to run_________________________________
switch(command) {
    case 'my-tweets':
        // get my tweets
        myTwitter.printRecentTweets(20);
        break;
    case 'spotify-this-song':
        // search for the songs
        if (term) {
            mySpotify.printSongs(term);
        } else {
            mySpotify.printSongs('The Sign');
        }
        break;
    case 'movie-this':
        // search for a movie
        if (term) {
            myOMDB.printMovie(term);
        } else {
            myOMDB.printMovie('Mr Nobody');
        }
        break;
    case 'do-what-it-says':
        // do what it says
        break;
    case 'tweet':
        myTwitter.tweet(term, function(error, tweet) {
            if (!error) {
                console.log('You Tweeted: ', tweet.text);
            } else {
                console.log('There was an error: ', error);
            }
        });
    default:
        console.log('____________________________________________________');    
        console.log('try these commands:');
        console.log('----------------------------------------------------');        
        console.log('do-what-it-says');
        console.log('movie-this <movie name>');
        console.log('spotify-this-song <song name>');
        console.log('my-tweets');
        console.log('tweet <message>');
        break;
}



