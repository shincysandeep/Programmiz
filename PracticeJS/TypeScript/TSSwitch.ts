var today:number=new Date().getDay();
switch(today)
{
    case 0: console.log("Sunday");
    break;
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    dafault: console.log("Otherdays");
    }