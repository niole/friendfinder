FlowRouter.route("/", {
  action: function() {
    AccountsTemplates.logout();
    Session.set('loaded', false);
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/navigate/:otherUserId", {
  triggersEnter: [function(context, redirect) {
    if (!Meteor.user()) {
      redirect('/');
    }
  }],
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

