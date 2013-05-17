//= require jquery
//= require foundation
//= require_tree .

(function() {
  var conference_date = new Date(2013, 8, 20);
  var today = new Date();
  var one_day_in_milliseconds = (1000 * 60 * 24 * 60);
  var days_until_conference = Math.ceil((conference_date - today) / one_day_in_milliseconds);
  $('#days_until_conference #number').html(days_until_conference);
})()