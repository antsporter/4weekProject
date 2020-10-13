
let tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock() {
    let date=new Date();
    let nDay=date.getDay(),nMonth=date.getMonth(),nDate=date.getDate();
    let nHour=date.getHours(),nMin=date.getMinutes(),nSec=date.getSeconds();
        if(nMin<=9) nMin="0"+nMin;
        if(nSec<=9) nSec="0"+nSec;

    let clocktext=""+tday[nDay]+", "+tmonth[nMonth]+" "+nDate+" "+nHour+":"+nMin+":"+nSec+"";
    document.getElementById('clockbox').innerHTML=clocktext;
    }

GetClock();
setInterval(GetClock,1000);
