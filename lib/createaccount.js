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
    var user = Meteor.user();
    if (!error) {
      if (state === "signIn") {
        Session.set('userId', user._id);
        FlowRouter.go("/navigate/0");
        return true;
      }
      if (state === "signUp") {
        ProfileInfo.insert({_id: user._id,
                           email: user.emails[0].address,
                           name: user.profile.name});
        Session.set('userId', user._id);
        FlowRouter.go("/navigate/0");
        return true;
      }
    }
    return false;
  }
});
