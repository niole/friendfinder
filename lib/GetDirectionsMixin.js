GetDirectionsMixin = {
  getDirections: function(origin, dest, apiKey, mode, callback) {
    //origin dest expect {lat: number, lng: number}
    //not sure if have to do this call from backend
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin="+
                  origin.lat+origin.lng+"&destination="+ dest.lat+dest.lng+"&mode="+mode+"&key="+apiKey;
   $.ajax({
      type: "GET",
      url: url,
      success: function (res) {
        callback(res);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.error(xhr.status);
        console.error(thrownError);
      }
    });
  }
};
