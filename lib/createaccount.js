AccountsTemplates.configure({
    texts: {
        optionalField: "",
        button: {
          signIn: "Sign In",
          signUp: "Sign Up",
        }
    }
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name"
});

AccountsTemplates.configure({
  onSubmitHook: function(error, state){
    var userId = Meteor.userId();
    var currLoc = Geolocation.latLng()
    if (!currLoc) {
      console.error(Geolocation.error());
    }
    if (!error) {
      if (state === "signIn") {
        Friends.update({_id: userId},
                       {location: currLoc? currLoc :{lon: 0, lng: 0}},
                      function(err) {
                        if (err) {
                          throw Error(err);
                        }
                      });

        FlowRouter.go("/"+userId+"/&");
        return true;
      }
      if (state === "signUp") {
        Friends.insert({
          _id: userId,
          location: currLoc? currLoc :{lon: 0, lng: 0},
          requests: [],
          findableByUser: [],
          canFindUser: []
        }, function(err) {
          if (err) {
            throw Error(err);
          }
        });
        FlowRouter.go("/"+userId+"/&");
        return true;
      }
    }
    return false;
  }
});
