var datetime = null;
var date = null;

var update = function() {
  date = moment();
  datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
  datetime = $('#time');
  update();
  setInterval(update, 1000);
});
