Button = React.createClass({
  mixins: [RemoveUserMixin, AddUserMixin, FindUserMixin],
  propTypes: {
    listtype: React.PropTypes.string.isRequired,
    buttontypes: React.PropTypes.array.isRequired,
    userid: React.PropTypes.string.isRequired,
    friendid: React.PropTypes.string.isRequired
  },
  makeButtons(listtype,userid, friendid) {
    if (buttontypes.length > 1) {
      return (
        <span>
          <div className="ui button"
            onClick={this.addUser.bind(null,userid,friendid,listtype)}>
            Add
          </div>
          <div className="ui button"
            onClick={this.removeUser.bind(null,userid,friendid,listtype)}>
            Remove
          </div>
        </span>
      );
    } else {
      if (buttontypes[0] === "remove") {
        return (
          <div className="ui button"
            onClick={this.removeUser.bind(null,userid,friendid,listtype)}>
            Remove
          </div>
        );
      }
      if (buttontypes[0] === "find") {
        return (
          <div className="ui button"
            onClick={this.findUser.bind(null,userid,friendid)}>
            Find
          </div>
        );
      }
    }
  },
  render() {
    return (
      <div>
        {this.makeButtons( this.props.listtype,
                                this.props.userid, this.props.friendid)}
      </div>
    );
  }
});
