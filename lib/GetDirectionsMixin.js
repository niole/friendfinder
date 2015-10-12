GetDirectionsMixin = {
  getDirections: function(origin, dest, mode) {
      var apiKey = "AIzaSyA0aDt0DzPSZkTW0pHfHLNJ0tnfaCuf_Og";
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
};
