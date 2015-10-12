Meteor.methods({
  getDirections: function(url) {

    return HTTP.call("GET", url);
  }
});
