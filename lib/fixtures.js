Meteor.startup(function() {
  if (Meteor.users.find().count() > 0) {
    let users = Meteor.users.find().fetch();
    var loc = [{lat: 37.370248, lng: -122.025825},
               {lat: 37.366610, lng: -122.013740},
               {lat: 37.366616, lng: -122.013745},
               {lat: 37.367622,lng: -122.023057}];
    for (var i=0; i<3; i++) {
      if (i < loc.length) {
//        Locations.insert({_id: users[i]._id,
 //                         location: loc[i]});
      }
    }
  }
});
