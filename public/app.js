/*
var count = 0;
var interval;
function timer(){
    count++;
console.log(count)
}
interval =setInterval(timer,1000)
setTimeout(function(){
    clearInterval(interval)
},8000)
function timeout(){
    console.log('running..')
}
setTimeout(timeout , 1000)
*/
var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;
hoursHeading = document.getElementById('hours')
minHeading = document.getElementById('min')
secHeading = document.getElementById('sec')
msecHeading = document.getElementById('msec')
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
if(msec>=1000){
    sec++
    secHeading.innerHTML = sec;
    msec = 0
}else if(sec >= 60){
min++;
sec= 0;
minHeading.innerHTML = min;
}
else if(min >= 60){
   hoursHeading.innerHTML = hours;
}
}
function start(){
    interval = setInterval(timer, 2000)
    document.getElementById('resume').disabled = true;
}
function stop(){
    clearInterval(interval)
    document.getElementById('resume').disabled = false;

}
function reset(){
    hours = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hoursHeading.innerHTML = hours
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;

    stop()
    document.getElementById('resume').disabled = false;

}

