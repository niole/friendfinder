HomePage = React.createClass({
  propTypes: {
    otheruserid: React.PropTypes.array.isRequired
  },
  componentDidMount() {
    GoogleMaps.load();
    this.otherUserloc= null;
    this.loc= null;
  },
  getInitialState() {
    return {directions: null};
  },
  mixins: [GetDirectionsMixin,ReactMeteorData],
  getMeteorData() {
    let userId = Meteor.userId();
    let otherUser = Locations.findOne({_id: this.props.otheruserid});
    if (otherUser) {
      this.otherUserLoc = otherUser;
    }

    if(Geolocation.latLng()) {
      this.loc = Geolocation.latLng();
      if(userId) {
        if (Locations.findOne({_id: userId})) {
          Locations.update({_id: userId},
                         {$set: {location: this.loc}},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        } else {
          Locations.insert({_id: userId,
                          location: this.loc},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        }
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
