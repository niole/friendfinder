SearchBox = React.createClass({
  mixins: [FormUserQueryMixin],
  getInitialState() {
    return {userData: []};
  },
  componentDidMount() {
    const dd = document.getElementById('search-dd');
    dd.addEventListener("mouseleave", function() {
      event.preventDefault();
      this.resetDD();
    }.bind(this));
  },
  resetDD() {
    this.setState({userData: []});
  },
  getUsers() {
    event.preventDefault();
    let searchData = React.findDOMNode(this.refs.findusers).value;
    let splitData = searchData.split(" ");
    this.setState({userData: this.getRelevantUsers(splitData)});
  },
  showResults(profiles) {
    return  _.map(profiles, p => {
        return (
          <div className="item">
            <i className="smile icon"></i>
            <div className="content">
              <a className="header" href={"/navigate/"+p._id}>{p.name}</a>
            </div>
          </div>
        );
      });
  },
  render() {
    return (
      <div>
        <div className="ui action input">
          <input ref="findusers" type="text" placeholder="Search..."/>
          <button className="ui button" onClick={this.getUsers}>Search</button>
        </div>
        <div className="ui large middle aligned divided list dd" id="search-dd">
          {this.showResults(this.state.userData)}
        </div>
      </div>
    );
  }
});