FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/:userid/:userstring", {
  action: function(params) {
    var friendids = [];
    if (params.userstring.length > 1) {
      friendids = params.userstring.split("&");
    }
    ReactLayout.render(MainLayout, {
      content: <HomePage
                userid={params.userid}
                friendids={friendids}
                />
    });
  }
});

