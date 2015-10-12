MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    if (Meteor.user()) {
      return {show: true};
    } else {
      return {show: false};
    }
  },
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  showLoggedInLayout(show) {
    if (show) {
       return (
        <div className="ui two item menu">
          <div className="item">
            <SearchBox/>
          </div>
          <a className="item" onClick={this.logOut}>Logout</a>
        </div>
       );
    } else {
       return (
        <div className="ui two item menu"/>
       );
    }
  },
  render() {
    return (
      <span>
        {this.showLoggedInLayout(this.data.show)}
        {this.props.content}
      </span>
    );
  }
});
