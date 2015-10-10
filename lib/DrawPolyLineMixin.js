DrawPolyLineMixin = {
  setPolyline: function(mapInstance, coords, color, opacity, weight, geodesic) {
    //coords expects array: [{lat: number, lng: number}]
    var newPath = new google.maps.Polyline({
      path: coords,
      geodesic: geodesic,
      strokeColor: color,
      strokeOpacity: opacity,
      strokeWeight: weight
    });

    newPath.setMap(mapInstance);
  }
};
