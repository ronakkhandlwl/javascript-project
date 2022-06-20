const playClip = (index) => {
  const audio = new Audio(`audio/key-${index+1}.mp3`);
  audio.play();
};

const clickHandle = (dValue) => {
  let keys = document.querySelectorAll("path");
  keys.forEach((element, index) => {
    if (element.getAttribute("d") == dValue) {
      playClip(index);
    }
  });
};

window.onclick = (event) => {
  element = event.target;
  let classRef = element.getAttribute("class");
  if (classRef == "white-keys" || classRef == "black-keys") {
    clickHandle(element.getAttribute("d"));
  }
};
