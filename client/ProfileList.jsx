ProfileList = React.createClass({
  propTypes: {
    userIdArray: React.PropTypes.array.isRequired,
    userId: React.PropTypes.string.isRequired,
    listTitle: React.PropTypes.string.isRequired,
    listType: React.PropTypes.string.isRequired
  },
  displayList(userIds, listType, userId) {
    return _.map(userIds, id => {
      <div className="item">
        <div className="right floated content">
          <Button
            listype={listType}
            userid={userId}
            friendid={id}
          />
        </div>
        <i className="pin icon"></i>
        <div className="content">
          {id}
        </div>
      </div>
    });
  },
  render() {
    return (
      <div>
        <h1>{this.props.listTitle}</h1>
        <div className="ui middle aligned divided list">

          {this.displayList(this.props.userIdArray,
                            this.props.listType,
                            this.props.userId)}
        </div>
    </div>
    );
  }
});
