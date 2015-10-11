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
        Session.set('userId', userId);
        FlowRouter.go("/navigate/0");
        return true;
      }
      if (state === "signUp") {
        Session.set('userId', userId);
        FlowRouter.go("/navigate/0");
        return true;
      }
    }
    return false;
  }
});
