Directions = React.createClass({
  propTypes: {
    userloc: React.PropTypes.object.isRequired,
    otheruserloc: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {directions: null};
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    if (this.props.userloc && this.props.otheruserloc) {
      var origin = this.props.userloc;
      var dest = this.props.otheruserloc;
      //var mode="driving";

      var apiKey ="AIzaSyA0aDt0DzPSZkTW0pHfHLNJ0tnfaCuf_Og";
      var url = "https://maps.googleapis.com/maps/api/directions/json?origin="+
                origin.lat+","+origin.lng+"&destination="+ dest.lat+","+dest.lng+/*"&mode="+mode+*/"&key="+apiKey;
      Meteor.call('getDirections', url, function(err, data) {
        if (!err) {

          this.setState({
             directions: {
               endAddress: data.data.routes[0].legs[0].end_address,
               distance: data.data.routes[0].legs[0].distance,
               duration: data.data.routes[0].legs[0].duration,
               startAddress: data.data.routes[0].legs[0].start_address,
               steps: data.data.routes[0].legs[0].steps
            }
          });
        } else {
          console.error(err);
        }
      }.bind(this));

    }
    return {};
  },
  showDirections(directions) {
    if (directions) {
      return _.map(directions.steps, (step,i) => {
        return <Direction key={"step-"+i} step={step}/>;
      });
    }
  },
  render() {
    return (
      <ul>
        {this.showDirections(this.state.directions)}
      </ul>
    );
  }
});
