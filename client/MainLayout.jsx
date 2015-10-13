MainLayout = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    if (Meteor.user()) {
      return {show: true, width: $(window).width()};
    } else {
      return {show: false, width: $(window).width()};
    }
  },
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  showIcon(show) {
    if (show) {
      return (
          <div className="item">
            <i id="sec-fflogo" className="map icon"></i>
          </div>
      );
    }
  },
  showLoggedInLayout(show, width) {
    let menuClass = "ui two item menu";
    let getIcon = false;
    if (width > 500) {
      menuClass = "ui three item menu";
      getIcon = true;
    }
    if (show) {
       return (
        <div className={menuClass}>
          <div className="item">
            <SearchBox/>
          </div>
          {this.showIcon(getIcon)}
          <a className="item" onClick={this.logOut}>Logout</a>
        </div>
       );
    } else {
       return (
        <div className="ui one item menu">
          <i id="sec-fflogo" className="map icon"></i>
        </div>
       );
    }
  },
  render() {
    return (
      <span>
        {this.showLoggedInLayout(this.data.show, this.data.width)}
        {this.props.content}
      </span>
    );
  }
});
