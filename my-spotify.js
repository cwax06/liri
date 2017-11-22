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
        spotify.search({ type: 'track', query: term }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            self.prettyPrintSongs(data.tracks.items);
        });
    }
    self.prettyPrintSongs = function(tracks) {
        console.log(tracks);
        for (var i = 0; i < tracks.length; i++) {
            console.log(tracks[i].album);
        }
    }
}

// Create object to export
var mySpotify = new MySpotify();
module.exports = mySpotify;
