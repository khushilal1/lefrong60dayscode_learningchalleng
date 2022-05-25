
const hour=document.querySelector(".hour")
const minute=document.querySelector(".hour")
const second=document.querySelector(".hour")



setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);



// ******************************************************
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let milisec = time.getMilliseconds();

    am_pm = "AM";
    //getting month
    let day=time.getUTCDate()
    let month=time.getUTCMonth()
    let year=time.getFullYear()
  





    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = `${hour} :${min} : ${sec} ${am_pm}
    ${milisec}`;
  
            let currentdate = `${day} /
            ${month }/ ${year} `
  
            
    document.getElementById("digital_clock")
            .innerHTML = currentTime;
            
            document.getElementById("digital_date")
            .innerHTML = currentdate;
            
}
showTime();