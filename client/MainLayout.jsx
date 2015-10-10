MainLayout = React.createClass({
  render() {
    return (
      <span>
        <div className="ui three item menu">
          <a className="active item">Home</a>
          <a className="item">Friends</a>
          <a className="item">Requests</a>
        </div>
        {this.props.content}
      </span>
    );
  }
});
