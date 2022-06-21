let checkboxes = document.querySelectorAll('input');
let index = undefined;
let lastChecked;
let isChecked = new Array(10).fill(false);

const check = (idx) => {
  if (event.shiftKey) {
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
  }
  if (isChecked[idx] == false) {
    lastChecked = idx;
  }
  isChecked[idx] = !isChecked[idx];
};

checkboxes.forEach((element, idx) => {
  element.addEventListener('click', function () {
    check(idx);
  });
});
