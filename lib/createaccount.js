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
    if (!error) {
      if (state === "signIn") {
        FlowRouter.go("/"+userId+"/&");
        return true;
      }
      if (state === "signUp") {
        Friends.insert({
          _id: userId,
          location: {lon: 0, lng: 0},
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
