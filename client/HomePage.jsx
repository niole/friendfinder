HomePage = React.createClass({
  propTypes: {
    otheruserid: React.PropTypes.array.isRequired
  },
  componentDidMount() {
    if (!Meteor.userId()) {
      FlowRouter.go('/');
    }
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

    if(Geolocation.latLng()) {
      this.loc = Geolocation.latLng();
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
