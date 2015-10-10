RemoveUserMixin = {
  removeUser: function(userid, friendid, listtype) {
    if (listtype === "findableByUser" || listtype === "all") {
      Friends.update({_id: userid},
                          { $pull: { "findableByUser":
                            {userId: friendid}}
                          },
                       function(err) {
                         if (err) {
                           throw Error(err);
                         }
                       });
    }
    if (listtype === "canFindUser" || listtype === "all") {
      Friends.update({_id: userid},
                          { $pull: { "canFindUser":
                            {userId: friendid}},
                          },
                       function(err) {
                         if (err) {
                           throw Error(err);
                         }
                       });
    }
    if (listtype === "requests" || listtype === "all") {
      Friends.update({_id: userid},
                          { $pull: { "requests":
                            {userId: friendid}}
                          },
                       function(err) {
                         if (err) {
                           throw Error(err);
                         }
                       });
   }
  }
};
