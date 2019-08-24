// need to add an event listener for key press. look at the code
// then get the respective div and change that 
// when a key is pressed , need to correspond it to the key div
// based on the data attribute
// then add in the class of playing (then remove it)
// and play the sound @ the same time 
function playAudio(key, audio) {
    // need to rewind it to the start so if you hit in successsion, 
    // it will not lag.
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing");
   // key.classList.re
}
function turnOffPlayingStyle(event) {
    // only want to look at when the longest one is done 
    // so look at property name of transform, skip the others 
    if (event.propertyName !== "transform") {
        return;
    }
    // this is equal to what is got called against (the key)
    this.classList.remove("playing");
}
document.addEventListener("keydown", (event) => {
    const key = document.querySelector(`[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!audio) {
        return;
    }
   //console.log(audio);

    playAudio(key, audio);
    // listen for transition end on all the keys. when its ended u wanna remove it 
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', turnOffPlayingStyle));
    //console.log(key);


})