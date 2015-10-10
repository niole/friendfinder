AddUserMixin = {
  addUser: function(userid, friendid, listtype) {
    Friends.update({_id: userid},
                   { $push: { listtype:
                    {userId: friendid}},
                   function(err) {
                    if (err) {
                      throw Error(err);
                    }
                   }
    });
  }
};
