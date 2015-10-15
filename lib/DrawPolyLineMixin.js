DrawPolyLineMixin = {
  setPolyline: function(id, coordArray, map) {
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(map);

    let request = {
      origin: coordArray[0],
      destination: coordArray[coordArray.length-1],
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
      directionsDisplay.setDirections(result);
    });
  }
};
