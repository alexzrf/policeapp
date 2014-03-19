var map;

function showMap(lat, lng) {
  console.log("Drawing map of " + lat + ", " + lng);
  var map_options = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.MAP
  }
  map = new google.maps.Map($('#map-canvas')[0], map_options);
  var timer;

  google.maps.event.addListener(map, "center_changed", function() {
    clearTimeout(timer);
    timer = setTimeout(function(){
      var msg = "New Center=>" + map.getCenter().lat()+ ", " + map.getCenter().lng();
      console.log(msg);
      $.ajax({
        url: '/crimes/stats',
        data: {
          lat: map.getCenter().lat(),
          lng: map.getCenter().lng()
        },
        success: function(json) {
          _(json).each(function(c) {
            var myLatlng = new google.maps.LatLng(c.location.latitude,c.location.longitude)
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title:"Hello World!"
            });
          });
        drawChart(json);
        }
      });
    }, 2000);
  });
}
$(document).ready(function(){
  showMap(,);
});