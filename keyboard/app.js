let randomKey, dataKey;
let keys = document.getElementsByClassName("key");

const jiggleRandomKey = () => {
    randomKey = Math.floor(Math.random()*53);
    keys[randomKey].classList.add("jiggle");
    dataKey = keys[randomKey].getAttribute("data-key");
}

document.addEventListener('keydown',function(event){
    let pressedKey = event.key.toUpperCase();
    if(pressedKey=="TAB") {
        event.preventDefault();
    }
    if(pressedKey == dataKey) {
        keys[randomKey].classList.remove("jiggle");
        jiggleRandomKey();
    } else {
        if(pressedKey=='\\') {
            pressedKey = pressedKey + pressedKey;
        }
        document.querySelector(`button[data-key="${pressedKey}"]`).classList.add("red");
        setTimeout(function(){
            document.querySelector(`button[data-key="${pressedKey}"]`).classList.remove("red");
        },200);
    }
});

jiggleRandomKey();
