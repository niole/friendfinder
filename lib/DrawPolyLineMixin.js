DrawPolyLineMixin = {
  setPolyline: function(id, coordArray, map) {
//    let map = new google.maps.Map(document.getElementById(id), {
//      zoom: 8,
//      center: center,
//      mapTypeId: google.maps.MapTypeId.TERRAIN
//    });

    let newPath = new google.maps.Polyline({
      path: coordArray,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    newPath.setMap(map);
  }
};
