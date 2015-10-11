MakeMapMixin = {
  mapCenter: function(userloc, otheruserloc) {
    if (userloc) {
      return userloc;
      if (otheruserloc) {
        return {lat: (Math.abs(userloc.lat-otheruserloc.lat)/2),
                lng: (Math.abs(userloc.lng-otheruserloc.lng)/2)};
      }
    } else {
      return {lat: 68.914671, lng: -40.729096};
    }
  },
  makeMap: function(id, userloc, otheruserloc) {

    let mapCenter = this.mapCenter(userloc, otheruserloc);

    var options = {
        center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
        zoom: 8
      };

      GoogleMaps.create({
        name: 'mapInstance',
        element: document.getElementById(id),
        options: options
      });

  }
};
