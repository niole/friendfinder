GetDirectionsMixin = {
  getDirections: function(origin, dest, apiKey, mode, callback) {
    //origin dest expect {lat: number, lon: number}
    //consider reformatting location object in Friends collection, so keys
    //are more compatible with some of the google maps stuff
    //not sure if have to do this call from backend
    var endpt = "https://maps.googleapis.com/maps/api/directions/json?origin="+
                  origin.lat+origin.lon+"&destination="+ dest.lat+dest.lon+"&mode="+mode+"&key="+apiKey;

    return callback(directionsArray);
  }
};
