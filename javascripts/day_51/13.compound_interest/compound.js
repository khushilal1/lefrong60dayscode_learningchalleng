
function  calculate(){
let s_year =Number(document.getElementById("s_year").value);
let s_month =Number(document.getElementById("s_month").value);
let s_day =Number(document.getElementById("s_day").value);
let e_year =Number(document.getElementById("e_year").value);
let e_month =Number(document.getElementById("e_month").value);
let e_day =Number(document.getElementById("e_day").value);
let principal =Number(document.getElementById("principal").value);
let rate =Number(document.getElementById("rate").value);
date()

function date(){

    if(e_day<s_day){
        day=((30+(e_day))-s_day);
        e_month=e_month-1;
        // console.log(e_month);
        if(e_month<s_month){
            month=(12+e_month)-s_month;
            e_year=e_year-1;
          year=e_year-s_year;
        }
        else{
            month=e_month-s_month;
        }
        
        
        
        }
        else{
        day=e_day-s_day;
        
        month=e_month-s_month;
        year=e_year-s_year;
        
        
        }
        
        
        console.log(`time be ${year} year ${month} month  ${day} day`);

var time=year+(month/12)+(day/365);

 let compound_interest=principal*((1+(12*rate/100))**time-1);
let amount=compound_interest+principal
let interest=document.getElementById("interest")
let amount_=document.getElementById("amount")
Amount=`The total amount be ${amount}`;
Interest=`The interest over year be ${compound_interest}`;
interest.innerHTML=Interest;
amount_.innerHTML=Amount;
console.log(Interest);
console.log(Amount);
        }

}