var startBtn = document.querySelector("#startBtn");
var stopBtn = document.querySelector("#stopBtn");
var resetBtn = document.querySelector("#resetBtn");
var timerDisplay = document.querySelector(".display");

let msec =00;
let sec = 00;
let min = 00;

let timerId = null;

startBtn.addEventListener('click',()=>{
    if(timerId!== null){
        clearInterval(timerId);
    }
    timerId=setInterval(startTimer ,10);
});
stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
})
resetBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML =`00 : 00 : 00`;
});


function startTimer(){
    msec++;
    if(msec==100){
        msec =0;
        sec++;
        if(sec ==60){
            sec =0;
            min++;
        }
    }

    let msecString = msec<10 ? `0${msec}`:msec;
    let secString  = sec<10 ? `0${sec}`:sec;
    let minString = min<10 ? `0${min}`: min;

    timerDisplay.innerHTML =`${minString} : ${secString} : ${msecString}`
}
