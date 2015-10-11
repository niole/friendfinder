MainLayout = React.createClass({
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  render() {
    return (
      <span>
        <div className="ui two item menu">
          <div className="item">
            <SearchBox/>
          </div>
          <a className="item" onClick={this.logOut}>Logout</a>
        </div>
        {this.props.content}
      </span>
    );
  }
});
