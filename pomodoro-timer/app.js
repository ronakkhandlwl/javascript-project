import { settings, startStopControl } from './utility.js';

const secondsRef = document.getElementById('seconds'),
  minutesRef = document.getElementById('minutes'),
  startRef = document.getElementById('start'),
  ringRef = document.getElementById('ring'),
  settingsRef = document.getElementById('settings');

settingsRef.addEventListener('click', settings);
startRef.addEventListener('click', startStopControl);

export { secondsRef, minutesRef, startRef, ringRef, settingsRef };
