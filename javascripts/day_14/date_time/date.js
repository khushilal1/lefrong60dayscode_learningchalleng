// tikme and date Object
// Creating Date Objects
// Date objects are created with the new Date() constructor.
// it reprent the a single moment in time
// that reprent since 1 january 1970 


// let currdDate=new Date();
// console.log(currdDate)
// // ****************************************
// // in the local method
// console.log(currdDate.toLocaleString())//give in the formate  26/04/2022, 20:58:31
// console.log(currdDate.toString())//give in the formate  26/04/2022, 20:58:31
//   console.log(Date.now()); //return the millisecond
  








//   *******************************
// var date=new Date(2022,0,34)
// console.log(date.toLocaleString())



// date onl
// const currDate=new Date()
// console.log(currDate.toLocaleString())
// console.log(currDate.getFullYear())
// console.log(currDate.getMonth());///0=>jan to 11=>dece
// console.log(currDate.getDate());


// Set method //to ste time manualy
// console.log(currDate.setDate(2022));
// console.log(currDate.setDate(2022,0));

// time returns
// const currtime=new Date()
// console.log(currtime.getTime());
// console.log(currtime.getDay());  //day interms of no. that is as 1=>mon,2=>tue,3=>wed,4=>thur,5=>fri,6=>sat,7=>sa
// console.log(currtime.getHours());
// console.log(currtime.getMinutes());
// console.log(currtime.getSeconds());
// console.log(currtime.getMilliseconds());

// set TimeRanges
// console.log(currtime.setTime());
// ***************************************************
// set meyhod

// function date(){
//     var currtime=new Date()
// currtime.setDate(5)
//     document.getElementById("demo").innerHTML=currtime;
// }



function date(){
    setInterval(()=>{
        var d=new Date()
        realtime=d.toLocaleTimeString();
        document.getElementById("demo").innerHTML=realtime;}
    )
    }
