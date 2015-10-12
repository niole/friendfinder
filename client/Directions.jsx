Directions = React.createClass({
  propTypes: {
    userloc: React.PropTypes.object.isRequired,
    otheruserloc: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    console.log('userloc', this.props.userloc);
    console.log('otheruserloc', this.props.otheruserloc);

    if (this.props.userloc && this.props.otheruserloc) {
      var origin = this.props.userloc;
      var dest = this.props.otheruserloc;
      var mode="driving";

      var apiKey ="AIzaSyA0aDt0DzPSZkTW0pHfHLNJ0tnfaCuf_Og";
      var url = "https://maps.googleapis.com/maps/api/directions/json?origin="+
                origin.lat+","+origin.lng+"&destination="+ dest.lat+","+dest.lng+"&mode="+mode+"&key="+apiKey;
//      var url = "https://maps.googleapis.com/maps/api/directions/json?origin=Chicago,IL&destination=Los+Angeles,CA&waypoints=Joplin,MO|Oklahoma+City,OK&key="+apiKey;

      console.log('url', url);
      Meteor.call('getDirections', url, function(err, data) {
        if (!err) {
          console.log('getdirections result', data);
        } else {
          console.error(err);
        }
      });

    }
    return {};
  },
  render() {
    return <div/>;
  }
});
