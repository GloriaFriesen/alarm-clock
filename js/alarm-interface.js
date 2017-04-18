var alarmTime = null;

var alarmOn = function() {
  var date = moment();
  if (alarmTime === date.format('HH:mm')) {
    $("#wakeUp").text("Alarm is currently going off.");
    $("#snooze").show();
  }
};

$(document).ready(function() {
  $("#alarm").click(function() {
    alarmTime = $("#alarmInput").val();
    alarmOn();
    setInterval(alarmOn, 1000);
  });

  $("#snoozeButton").click(function() {
    $("#wakeUp").text("You are currently snoozing.");
    $("#snooze").hide();
    var snoozeTime = moment();
    alarmTime = snoozeTime.add(1, 'minutes').format('HH:mm');
    console.log("alarmTime: " + alarmTime);
    alarmOn();
    setInterval(alarmOn, 1000);
  });
});
