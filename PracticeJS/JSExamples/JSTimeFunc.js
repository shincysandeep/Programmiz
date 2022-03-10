var moment = require('moment-timezone');
//let a =prompt("Enter a date (mm/dd/yyyy) and Time(hh:mm:ss):");
//console.log(a);
//a= new Date();
//console.log(a);

function timezoneconv(st) // Function to convert time zone
{
console.log("The PST Time is :"+ st.tz('America/Los_Angeles').format('ha z')); 
console.log("The EST Time is :" + st.tz('America/New_York').format('ha z'));    
console.log("The MST Time is :"+ st.tz('America/Phoenix').format('ha z'));          // 
console.log("The CST Time is: "+ st.tz('America/Chicago').format('ha z')); 
   //
}

let newtime = new Date();
console.log("The Current System Time is:  " + newtime);
var mytime = moment(newtime);
console.log("The value passing to the function is:  " +mytime);
timezoneconv(mytime); // Calling the function
