// Variable declarations
let settingsFlag = false,
  startStopFlag = true,
  isRingGreen = true,
  interval,
  seconds,
  minutes;
const secondsRef = document.getElementById("seconds"),
  minutesRef = document.getElementById("minutes"),
  startRef = document.getElementById("start"),
  ringRef = document.getElementById("ring"),
  settingsRef = document.getElementById("settings");

//Functions
const settings = () => {
  if (settingsFlag == true) {
    secondsRef.setAttribute("disabled", "");
    minutesRef.setAttribute("disabled", "");
  } else {
    if (startStopFlag == false) start();
    secondsRef.removeAttribute("disabled");
    minutesRef.removeAttribute("disabled");
  }
  settingsFlag = !settingsFlag;
};

const startStopControl = () => {
  if (startStopFlag == true) {
    startStopFlag = false;
    startRef.innerHTML = "stop";
    if (settingsFlag == true) settings();
    seconds = secondsRef.value;
    minutes = minutesRef.value;

    if (isValid()) interval = setInterval(timer, 1000);
    else {
      startStopControl();
      secondsRef.value = "00";
      minutesRef.value = "00";
      alert("Invalid time");
    }
  } else {
    startStopFlag = true;
    startRef.innerHTML = "start";
    clearInterval(interval);
  }
};

const isValid = () => {
  let secLength = seconds.length,
    minLength = minutes.length;
  if (secLength == 0 || minLength == 0 || secLength > 2) return false;
  for (let i = 0; i < secLength; i++) {
    if (seconds[i] > "9" || seconds[i] < "0") return false;
  }
  for (let i = 0; i < minLength; i++) {
    if (minutes[i] > "9" || minutes[i] < "0") return false;
  }
  if (seconds > 60) return false;
  return true;
};

const timer = () => {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }
  if (minutes < 0) {
    minutes = 0;
    seconds = 0;
    changeRingColor();
    setTimeout(function () {
      alert("Time Over");
      changeRingColor();
    }, 100);
    startStopControl();
  }
  if (seconds < 10) secondsRef.value = "0" + seconds;
  else secondsRef.value = seconds;
  minutesRef.value = minutes;
};

const changeRingColor = () => {
  if (isRingGreen) ringRef.classList.add("ending");
  else ringRef.classList.remove("ending");
  isRingGreen = !isRingGreen;
};

settingsRef.addEventListener("click", settings);
startRef.addEventListener("click", startStopControl);
