const prompt = require('prompt-sync')();
let km=prompt("Enter kilometer:");
let mile = (km*0.6213).toFixed(4);
console.log(`The Mile is ${mile}`);
