MainLayout = React.createClass({
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  render() {
    return (
      <span>
        <div className="ui three item menu">
          <a className="active item">Home</a>
          <a className="item">Friends</a>
          <a className="item">Requests</a>
          <a className="item" onClick={this.logOut}>Logout</a>
        </div>
        {this.props.content}
      </span>
    );
  }
});
