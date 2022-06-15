var gearFlag = false;
document.getElementById("gear").addEventListener("click", gear);

function gear() {
    if (gearFlag == true) {
        gearFlag = false;
        document.getElementById("seconds").setAttribute('disabled', '');
        document.getElementById("minutes").setAttribute('disabled', '');
    } else {
        gearFlag = true;
        document.getElementById("seconds").removeAttribute('disabled');
        document.getElementById("minutes").removeAttribute('disabled');
    }
}

var startFlag = true;
let interval, seconds, minutes;
document.getElementById("start").addEventListener("click", start);

function start() {
    if (startFlag == true) {
        startFlag = false;
        document.getElementById("start").innerHTML = "stop";
        if (gearFlag == true) gear();
        seconds = document.getElementById("seconds").value;
        minutes = document.getElementById("minutes").value;
        if(seconds>60 || seconds<0) {
            alert("Value of second should be between 0-60");
            startFlag = true;
            document.getElementById("start").innerHTML = "start";
            document.getElementById("seconds").value = '00';
        } else if(minutes<0) {
            alert("Value of minute should be greater than or equal to 0");
            startFlag = true;
            document.getElementById("start").innerHTML = "start";
            document.getElementById("minutes").value = '00';
        } else {
            interval = setInterval(timer, 1000);
        }
    } else {
        startFlag = true;
        document.getElementById("start").innerHTML = "start";
        clearInterval(interval);
    }
}

function timer() {
    seconds--;
    if (seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if (minutes < 0) {
        minutes = 0;
        seconds = 0;
        document.getElementById("ring").classList.add("ending");
        setTimeout(function() {
            alert("Time Over");
            document.getElementById("ring").classList.remove("ending");
        },100);
        start();
    }
    if (seconds < 10) document.getElementById("seconds").value = '0' + seconds;
    else document.getElementById("seconds").value = seconds;

    if (minutes < 10) document.getElementById("minutes").value = minutes;
    else document.getElementById("minutes").value = minutes;
}