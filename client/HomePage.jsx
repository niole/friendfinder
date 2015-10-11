HomePage = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    otheruserid: React.PropTypes.array.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    if (this.props.otheruserid) {
      this.otherUserloc = Locations.find({_id: this.props.otheruserid});
    }

    if(Geolocation.latLng()) {
      this.loc = Geolocation.latLng();
      console.log(this.loc);
      Locations.update({_id: this.props.userid},
                     {$set: {location: this.loc}},
                     function(err) {
                       if (err) {
                         console.error(err);
                       }
                     });
    }

    return {
      userLoc: this.loc,
      otherUserLoc: this.otherUserLoc
    };
  },
  componentDidMount() {
    GoogleMaps.load();
    this.otherUserloc= null;
    this.loc= null;
  },
  render() {
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
