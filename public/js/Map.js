var map, markers = [];

function Map(id){
  this.id = id;
  this.init();
}

Map.prototype.init = function(){
  var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
  // set the map options hash
  var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById(this.id);
  // initialize a new Google Map with the options
  map = new google.maps.Map(map_canvas_obj, mapOptions);
  // Add the marker to the map
  /*var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });*/
  // Add the marker to the map by calling setMap()
  //marker.setMap(map);
}

Map.prototype.updateMarker = function(longitude, latitude, id, map){
  var myLatlng = new google.maps.LatLng(longitude,latitude);

  var marker = new google.maps.Marker({
      position: myLatlng,
      id: id
    });

  // Add the marker to the map by calling setMap()
  marker.setMap(map);
  markers.push(marker)
}

Map.prototype.deleteMarker = function(id){
  var found = markers.filter(function(marker){
    return marker.id == id
  })



  found[0].setMap(null);

}
