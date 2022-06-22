let checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked = null;

document.onselectstart = new Function('return false');

checkAll = (event) => {
  if (event.shiftKey && lastChecked) {
    let lastCheckedIndex = parseInt(lastChecked.slice(8));
    let curIndex = parseInt(event.target.id.slice(8));
    let state = event.target.checked;

    if (lastCheckedIndex > curIndex) {
      let temp = lastCheckedIndex;
      lastCheckedIndex = curIndex;
      curIndex = temp;
    }

    for (let i = lastCheckedIndex; i < curIndex; i++) {
      checkboxes[i].checked = state;
    }
  }

  lastChecked = event.target.id;
};

checkboxes.forEach((elem) => {
  elem.addEventListener('click', checkAll);
});
