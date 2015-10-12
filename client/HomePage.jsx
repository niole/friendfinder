HomePage = React.createClass({
  propTypes: {
    otheruserid: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    GoogleMaps.load();
    this.otherUserloc= null;
    this.loc= null;
  },
  getInitialState() {
    return {directions: null};
  },
  mixins: [UpdateLocationMixin, GetDirectionsMixin, ReactMeteorData],
  getMeteorData() {
    let userId = Meteor.userId();
    let otherUser = Locations.findOne({_id: this.props.otheruserid});

    if (otherUser) {
      this.otherUserLoc = otherUser;
    }

    let latlng = Geolocation.latLng();

    if(latlng) {
      this.loc = latlng;
      if(userId) {
        this.updateLocation(userId, this.loc);
      }
    }

    return {
      userLoc: this.loc,
      otherUserLoc: this.otherUserLoc ? this.otherUserLoc.location : null
    };
  },
  showDirectionsButton(userloc, otheruserloc) {

    if (userloc && otheruserloc) {
       return <button onClick={this.getDirections.bind(this, userloc, otheruserloc, "driving")}
                className="ui yellow button fullwidth">
                Get Directions
              </button>;
    }
  },
  render() {
    return (
      <div>
        {this.showDirectionsButton(this.data.userLoc, this.data.otherUserLoc)}
        <Map
          directions={this.state.directions}
          userloc={this.data.userLoc}
          otheruserloc={this.data.otherUserLoc}
        />
        <Directions
          directions={this.state.directions}
        />
      </div>
    );
  }
});
