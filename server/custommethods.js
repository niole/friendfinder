Meteor.methods({
  getCurrentLoc: function (callback) {
    callback(Geolocation.latLng());
  }
});
