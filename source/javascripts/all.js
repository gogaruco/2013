//= require jquery
//= require foundation
//= require google_maps
//= require_tree .

(function () {
  var conference_date = new Date(2013, 8, 20);
  var today = new Date();
  var one_day_in_milliseconds = (1000 * 60 * 24 * 60);
  var days_until_conference = Math.ceil((conference_date - today) / one_day_in_milliseconds);
  $('.countdown-number').html(days_until_conference);
})()

$(document).ready(function () {
  if ($("#directions-map").length !== 0) {
    var map = new google.maps.Map(document.getElementById('directions-map'), {
      zoom: 15,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: false
    });

    var center = new google.maps.LatLng(37.76780, -122.40062);
    var conferenceCenter = new google.maps.LatLng(37.76781, -122.39337);
    map.setCenter(center);
    new google.maps.Marker({
      position: conferenceCenter,
      map: map
    });
  }
});
