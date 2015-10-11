FlowRouter.route("/", {
  action: function() {
    Session.set('loaded', false);

    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/navigate/:otherUserId", {
  action: function(params) {
    Session.set('loaded', false);

    var otherUserId = null;
    if (params.otherUserId !== "0") {
      otherUserId = params.otherUserId;
    }
    ReactLayout.render(MainLayout, {
      content: <HomePage
                userid={Session.get('userId')}
                otheruserid={otherUserId}
                />
    });
  }
});

