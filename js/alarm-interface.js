var alarmTime = null;

var alarmOn = function() {
  var date = moment();
  if (alarmTime === date.format('HH:mm')) {
    $("#wakeUp").text("Alarm is currently going off.");
  }
}


$(document).ready(function() {
  $("#alarm").click(function() {
    alarmTime = $("#alarmInput").val();
    alarmOn();
    setInterval(alarmOn, 1000);
  });
});
