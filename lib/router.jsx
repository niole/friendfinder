FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup/>
    });
  }
});
