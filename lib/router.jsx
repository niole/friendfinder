FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});

FlowRouter.route("/:userid/:userstring", {
  action: function(params) {
    var friendids = params.userstring.split("&");
    ReactLayout.render(MainLayout, {
      content: <HomePage
                userid={params.userid}
                friendids={friendids}
                />
    });
  }
});

