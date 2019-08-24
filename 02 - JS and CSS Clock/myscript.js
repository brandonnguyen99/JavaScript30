// get the time 
// 3 variables- hour, min, second 
// keep local variable  of hour and min and compare with updated 
// when hour number changes, rotate hour hand  rotate(??deg)
// or just change rotate each time based on an algo. 12 hours on clock 360/12 = 
// min = 
const second_hand = document.getElementsByClassName("second-hand")[0];
console.log(second_hand);
const min_hand = document.getElementsByClassName("min-hand")[0];
const hour_hand = document.getElementsByClassName("hour-hand")[0];
function changeTime() {
    const today = new Date();
    const seconds = today.getSeconds()
    const mins = today.getMinutes()
    const hour = today.getHours();
    changeSeconds(seconds);
    changeMin(mins);
    changeHour(hour, mins);
}
function changeSeconds(seconds) {
   //console.log(seconds);
    second_hand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
}
function changeMin(mins) {
   // console.log(mins);
    min_hand.style.transform = `rotate(${mins * 6 + 90}deg)`;
}
function changeHour(hour, mins) {
    if (hour >= 12) {
        hour = hour - 12;
    }
    // 30 degrees between each hour
    // add the offset for the minutes (if its at 30mins, the hour should be halfway to the next)
    // add 90 since it defaults at  9 o clock (reset it to 12 o clock)
    hour_position = (hour * 30) + (mins/60) * 30 + 90;
    hour_hand.style.transform = `rotate(${hour_position}deg)`;
}
// set timeout for one second 

setInterval(changeTime, 1000);
// second always changes, 60 seconds in 1 min, so it should rotate by 360/60 = 6 deg
