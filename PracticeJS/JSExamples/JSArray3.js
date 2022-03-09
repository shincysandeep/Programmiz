let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray=myArray.slice(0,myArray.length-1);
console.log(myArray);
let newmyArray=myArray.push("Shincy","Sandeep");
console.log(myArray);
let str2 = '(';
let str3 =')';
const map1 =myArray.map(x=>x+str2+myArray.index+str3);
console.log(map1);
