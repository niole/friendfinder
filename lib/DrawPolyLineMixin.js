DrawPolyLineMixin = {
  setPolyline: function(mapInstance, coords, color, opacity, weight, geodesic) {
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
