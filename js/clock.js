var clockID = null;
var timerRunning = false;

function showtime()
{

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeValue = "" + ((hours > 12) ? hours - 12 : hours);
    if (timeValue == "0") timeValue = 12;
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue += (hours >= 12) ? " PM" : " AM";
    var clock = document.getElementById("clock");
    clock.value = timeValue;
    clockID = setTimeout("showtime()", 1000);
}
function startclock() 
{
    timerRunning = true;
	showtime();
}

function stopclock()
{
    if (timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}
