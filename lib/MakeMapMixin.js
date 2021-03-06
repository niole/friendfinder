MakeMapMixin = {
  mapCenter: function(userloc, otheruserloc) {
    if (userloc) {
      return userloc;
      if (otheruserloc) {
        return {lat: (Math.abs(userloc.lat-otheruserloc.lat)/2),
                lng: (Math.abs(userloc.lng-otheruserloc.lng)/2)};
      }
    } else {
      return {lat: 41.394072, lng: -70.621697};

    }
  },
  makeMap: function(coordArray, id, userloc, otheruserloc) {
    let markers = [];
    let mapCenter = this.mapCenter(userloc, otheruserloc);
    let options = {
        center: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
        zoom: 8
      };

    GoogleMaps.create({
      name: 'mapInstance',
      element: document.getElementById(id),
      options: options
    });

    GoogleMaps.ready('mapInstance', function(map) {
      // Add a marker to the map once it's ready
      // sets a polyline once all relevant data is available
      if (userloc && otheruserloc && coordArray) {
        this.setPolyline('gmap', coordArray, map.instance);
      }
      if (userloc) {
        let usermarker = new google.maps.Marker({
          position: new google.maps.LatLng(userloc.lat, userloc.lng),
          map: map.instance
        });
        markers.push(usermarker);
      }

      if (otheruserloc) {
        let othermarker = new google.maps.Marker({
          position: new google.maps.LatLng(otheruserloc.lat, otheruserloc.lng),
          map: map.instance
        });
        markers.push(othermarker);
      }

      let bounds = new google.maps.LatLngBounds();
      for(i=0;i<markers.length;i++) {
       bounds.extend(markers[i].getPosition());
      }

      map.instance.fitBounds(bounds);

    }.bind(this));

  }
};
