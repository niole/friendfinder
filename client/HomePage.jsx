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

    if (this.loc && this.otherUserLoc) {
      this.getDirections(this.loc, this.otherUserLoc, "driving");
    }

    return {
      userLoc: this.loc,
      otherUserLoc: this.otherUserLoc ? this.otherUserLoc.location : null
    };
  },
  render() {
    return (
      <div>
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
