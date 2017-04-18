var alarmTime = null;

var alarmOn = function() {
  var date = moment();
  if (alarmTime === date.format('HH:mm')) {
    $("#wakeUp").text("Alarm is currently going off.");
    $("#snooze").show();
    $("#stop").show();
  }
};

$(document).ready(function() {
  $("#alarm").click(function() {
    alarmTime = $("#alarmInput").val();
    $("#wakeUp").text("Your alarm is set for " + alarmTime);
    alarmOn();
    setInterval(alarmOn, 1000);
  });

  $("#snoozeButton").click(function() {
    $("#wakeUp").text("You are currently snoozing.");
    $("#snooze").hide();
    var snoozeTime = moment();
    var snoozeMinutes = parseInt($("#snoozeInput").val());
    alarmTime = snoozeTime.add(snoozeMinutes, 'minutes').format('HH:mm');
    console.log("alarmTime: " + alarmTime);
    alarmOn();
    setInterval(alarmOn, 1000);
  });

//stop button only works after alarm has been on for 1 minute (4:45 = 4:45; 4:45 != 4:46)
  $("#stopButton").click(function() {
    $("#wakeUp").empty();
    $("#snooze").hide();
    $("#stop").hide();
  });
});
