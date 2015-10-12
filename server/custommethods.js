//HTTP.methods({"https://maps.googleapis.com/maps/api/directions/json?origin=:origin&destination=:destination&mode=:mode&key=:key":
//    function(data) {
//
//  }
//});

Meteor.methods({
  getDirections: function(url) {

    return HTTP.call("GET", url);
  }
});
