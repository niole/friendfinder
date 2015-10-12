UpdateLocationMixin = {
  updateLocation: function(userId, loc) {

        if (Locations.findOne({_id: userId})) {
          Locations.update({_id: userId},
                         {$set: {location: this.loc}},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        } else {
          Locations.insert({_id: userId,
                          location: this.loc},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        }
  }
};
