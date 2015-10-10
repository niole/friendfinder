FindUserMixin = {
  findUser: function(userid, friendid) {
    var friendData = Friends.find({_id: friendid});
    FlowRouter.go("/"+userid+"/&"+friendid);
  }
};
