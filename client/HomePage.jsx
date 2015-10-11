HomePage = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    otheruserid: React.PropTypes.array.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let otherUser = Locations.findOne({_id: this.props.otheruserid});
    if (otherUser) {
      this.otherUserLoc = otherUser;
    }

    if(Geolocation.latLng()) {
      this.loc = Geolocation.latLng();
      if(this.props.userid) {
        if (Locations.findOne({_id: this.props.userid})) {
          Locations.update({_id: this.props.userid},
                         {$set: {location: this.loc}},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        } else {
          Locations.insert({_id: this.props.userid,
                          location: this.loc},
                         function(err) {
                           if (err) {
                             console.error(err);
                           }
                         });
        }
      }
    }

    return {
      userLoc: this.loc,
      otherUserLoc: this.otherUserLoc ? this.otherUserLoc.location : null
    };
  },
  componentDidMount() {
    GoogleMaps.load();
    this.otherUserloc= null;
    this.loc= null;
  },
  render() {
    console.log(this.data.otherUserLoc);
    console.log(this.data.userLoc);
    return (
      <div>
        <h1>hp</h1>
        <Map
          userloc={this.data.userLoc}
          otheruserloc={this.data.otherUserLoc}
        />
      </div>
    );
  }
});
