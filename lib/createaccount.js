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
        //TODO: hit route to home page
        return true;
      }
      if (state === "signUp") {
        Friends.insert({
          _id: userId,
          location: {loc: 0, lat: 0},
          findableByUser: [],
          canFindUser: []
        });
        //TODO: hit route to home page
        return true;
      }
    }
    return false;
  }
});
