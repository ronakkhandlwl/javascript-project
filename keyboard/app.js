let randomKey, dataKey;
let keyId = document.getElementById("key"+randomKey);

const jiggleRandomKey = () => {
    randomKey = Math.floor((Math.random()*53)+1);
    document.getElementById("key"+randomKey).classList.add("jiggle");
    dataKey = document.getElementById("key"+randomKey).getAttribute("data-key");
}
document.addEventListener('keydown',function(event){
    let pressedKey = event.key.toUpperCase();
    if(pressedKey == dataKey) {
        document.getElementById("key"+randomKey).classList.remove("jiggle");
        jiggleRandomKey();
    }
});

jiggleRandomKey();
