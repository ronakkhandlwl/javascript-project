var gearFlag = false;
var secondsRef = document.getElementById("seconds");
var minutesRef = document.getElementById("minutes");
var startRef = document.getElementById("start");

document.getElementById("gear").addEventListener("click", gear);

function gear() {
    if (gearFlag == true) {
        secondsRef.setAttribute('disabled', '');
        minutesRef.setAttribute('disabled', '');
    } else {
        secondsRef.removeAttribute('disabled');
        minutesRef.removeAttribute('disabled');
    }
    gearFlag = !gearFlag;
}

var startFlag = true;
var interval, seconds, minutes;
startRef.addEventListener("click", start);

function start() {
    if (startFlag == true) {
        startFlag = false;
        startRef.innerHTML = "stop";
        if (gearFlag == true) gear();
        seconds = secondsRef.value;
        minutes = minutesRef.value;
        
        if(isValid())
            interval = setInterval(timer, 1000);
        else {
            start();
            secondsRef.value = '00';
            minutesRef.value = '00';
            alert("Invalid time");
        }
    } else {
        startFlag = true;
        startRef.innerHTML = "start";
        clearInterval(interval);
    }
}

function isValid() {
    let secLength = seconds.length, minLength = minutes.length;
    if(secLength==0 || minLength==0 || secLength>2) return false;
    for(let i = 0; i < secLength; i++) {
        if(seconds[i]>'9' || seconds[i]<'0') return false;
    }
    for(let i = 0; i < minLength; i++) {
        if(minutes[i]>'9' || minutes[i]<'0') return false;
    }
    if(seconds>60) return false;
    return true;
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
    if (seconds < 10) secondsRef.value = '0' + seconds;
    else secondsRef.value = seconds;
    minutesRef.value = minutes;
}