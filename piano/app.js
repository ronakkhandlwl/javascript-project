const playClip = (index) => {
  const audio = new Audio(`audio/key-${index}.mp3`);
  audio.play();
};

const clickHandle = (dValue) => {
  let index = 1;
  let keys = document.querySelectorAll("path");
  keys.forEach((keys) => {
    if (keys.getAttribute("d") == dValue) {
      playClip(index);
    }
    index++;
  });
};

window.onclick = (e) => {
  element = e.target;
  let classRef = element.getAttribute("class");
  if (classRef == "white-keys" || classRef == "black-keys") {
    clickHandle(element.getAttribute("d"));
  }
};
