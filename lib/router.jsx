FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/navigate/:otherUserId", {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <HomePage
                userid={Meteor.userId()}
                otheruserid={params.otherUserId}
                />
    });
  }
});

