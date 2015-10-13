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
    React.findDOMNode(this.refs.findusers).value = '';
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
          <div className="ui yellow segment inline">
            <i className="smile icon inline"></i>
            <div className="content inline">
              <a className="header" href={"/navigate/"+p._id}>{p.name}</a>
            </div>
          </div>
        );
      });
  },
  render() {
    return (
      <div >
        <div className="ui action input">
          <input ref="findusers" type="text" placeholder="Find friends..." id="ff-searchbox"/>
          <button className="ui button" onClick={this.getUsers} id="ff-searchbox-button">Go</button>
        </div>
        <div className="ui segments large middle aligned divided list dd" id="search-dd">
          {this.showResults(this.state.userData)}
        </div>
      </div>
    );
  }
});
