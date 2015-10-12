FlowRouter.route("/", {
  action: function() {
    Session.set('loaded', false);
    if (Meteor.userId()) {
      FlowRouter.go("/navigate/0");
    }
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/navigate/:otherUserId", {
  action: function(params) {
    var otherUserId = null;
    if (params.otherUserId !== "0") {
      otherUserId = params.otherUserId;
    }
    ReactLayout.render(MainLayout, {
      content: <HomePage
                otheruserid={otherUserId}
                />
    });
  }
});

