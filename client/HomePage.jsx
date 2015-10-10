HomePage = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    friendids: React.PropTypes.array.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    console.log(this.props.friendids);

    if(Geolocation.latLng()) {
      var loc = Geolocation.latLng();
      console.log(loc);

      Friends.update({_id: this.props.userid},
                     {$set: {location: loc}},
                     function(err) {
                       if (err) {
                         console.error(err);
                       }
                     });
    }


  },
  componentDidMount() {
    GoogleMaps.load();
  },
  render() {
    return (
      <div>
        <Map/>
        <ProfileList
        userIdArray={this.props.friendids}
        userId={this.props.userid}
        listTitle={'Directions'}
        listType={['directions']}
        />
      </div>
    );
  }
});
