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
          <a className="item">
            <SearchBox/>
          </a>
          <a className="item" onClick={this.logOut}>Logout</a>
        </div>
        {this.props.content}
      </span>
    );
  }
});
