// require packages_____________________________________________
var Spotify  = require('node-spotify-api');
var keys = require('./keys');
// end require packages_________________________________________

var spotify = new Spotify({
    id: keys.spotifyKeys.client_id,
    secret: keys.spotifyKeys.client_secret
});

// cunstructor for object to export_____________________________
function MySpotify() {
    var self = this;
    // main functions
    self.printSongs = function(term) {
        console.log(term);
    }
}

// Create object to export
var mySpotify = new MySpotify();
module.exports = mySpotify;
