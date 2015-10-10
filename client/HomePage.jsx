HomePage = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    friendids: React.PropTypes.array.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    Geolocation.latLng();
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
