
let tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function GetClock() {
    let date=new Date();
    let nDay=date.getDay(),nMonth=date.getMonth(),nDate=date.getDate();
    let nHour=date.getHours(),nMin=date.getMinutes(),nSec=date.getSeconds();
        if(nMin<=9) nMin="0"+nMin;
        if(nSec<=9) nSec="0"+nSec;

        let msg = "";

        if (nHour <= 6) {
            msg = "Morning Riser! ";
        } else {
            if (nHour < 12) {
                msg = "Good morning ";
            } else {
                if (nHour <= 13) {
                    msg = "Happy Lunchtime "
                } else {
                if (nHour < 17) {
                    msg = "Good afternoon ";
                } else {
                    if (nHour < 22) {
                        msg = "Good evening ";
                    } else {
                        if (nHour >= 22) {
                            msg = "Go to bed! ";
                        }
                    }
                }
            }
        }
        }
    let clocktext=msg+"it's "+nHour+":"+nMin+":"+nSec+" "+tday[nDay]+", "+tmonth[nMonth]+" "+nDate;
    document.getElementById('clockbox').innerHTML=clocktext;
    }

GetClock();
setInterval(GetClock,1000);
