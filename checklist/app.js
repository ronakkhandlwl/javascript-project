let checkboxes = document.querySelectorAll('input');
let index = undefined;
let lastChecked, lastUnchecked;
let isChecked = new Array(10).fill(false);

const check = (idx) => {
  if (event.shiftKey) {
    if (isChecked[idx] == false) {
      if (lastChecked != undefined) {
        if (lastChecked > idx) {
          let temp = idx;
          idx = lastChecked;
          lastChecked = temp;
        }
        for (let i = lastChecked + 1; i < idx; i++) {
          isChecked[i] = true;
          document.getElementById(`episode-${i + 1}`).checked = true;
        }
      }
    } else {
      if (lastUnchecked != undefined) {
        if (lastUnchecked > idx) {
          let temp = idx;
          idx = lastUnchecked;
          lastUnchecked = temp;
        }
        for (let i = lastUnchecked + 1; i < idx; i++) {
          isChecked[i] = false;
          document.getElementById(`episode-${i + 1}`).checked = false;
        }
      }
    }
  }
  if (isChecked[idx] == false) {
    lastChecked = idx;
  }
  if (isChecked[idx] == true) {
    lastUnchecked = idx;
  }
  isChecked[idx] = !isChecked[idx];
};

checkboxes.forEach((element, idx) => {
  element.addEventListener('click', function () {
    check(idx);
  });
});
