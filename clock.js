
let tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock() {
    let date=new Date();
    let nDay=date.getDay(),nMonth=date.getMonth(),nDate=date.getDate();
    let nHour=date.getHours(),nMin=date.getMinutes(),nSec=date.getSeconds();
        if(nMin<=9) nMin="0"+nMin;
        if(nSec<=9) nSec="0"+nSec;

        let now = new Date();
        let hrs = now.getHours();
        let msg = "";

        if (hrs >  0) msg = "Morning Riser! "; // REALLY early
        if (hrs >  6) msg = "Good morning ";      // After 6am
        if (hrs > 12) msg = "Good afternoon ";    // After 12pm
        if (hrs > 17) msg = "Good evening ";      // After 5pm
        if (hrs > 22) msg = "Go to bed! ";
    let clocktext=msg+"it's "+nHour+":"+nMin+":"+nSec+" "+tday[nDay]+", "+tmonth[nMonth]+" "+nDate;
    document.getElementById('clockbox').innerHTML=clocktext;
    }

GetClock();
setInterval(GetClock,1000);
