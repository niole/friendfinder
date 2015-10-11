FormUserQueryMixin = {
  getRelevantUsers: function(searchData) {
    //expects array of strings
    let profiles = [];
    _.forEach(searchData, str => {
      if ( str.indexOf('@') > -1) {
        //query for email
        let user = ProfileInfo.findOne({email: str});
        if (user) {
          profiles.push(user);
        }
      } else {
        //query for name
        let users = ProfileInfo.find({"profile.name": str }).fetch();
        if (users) {
          //logs hooray it's a user
          _.forEach(users, u => {
            profiles.push(u);
          });
        }
    }
  });
  return profiles;
  }
};
