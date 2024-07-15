let daysId = document.querySelector("#days");
let hoursId = document.querySelector("#hours");
let minutesId = document.querySelector("#minutes");
let secondsId = document.querySelector("#seconds");


const  newYearTime = '1 Jan 2025'
function countDown(){
    const newYearDate = new Date(newYearTime);
    const currentYearDate = new Date();
    const timeInMs = newYearDate-currentYearDate;
    const totalSeconds = Math.floor(timeInMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    // console.log(days,hours,minutes,seconds);
    daysId.innerHTML = days;
    hoursId.innerHTML = formatTime(hours);
    minutesId.innerHTML = formatTime(minutes);
    secondsId.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}
countDown()
// setInterval(countDown,1000);
