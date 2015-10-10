MakeMapMixin = {
  makeMap: function() {
    var options = {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };

      GoogleMaps.create({
        name: 'mapInstance',
        element: document.getElementById('gmap'),
        options: options
      });
  }
};
