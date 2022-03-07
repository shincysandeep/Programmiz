
var moment = require('moment-timezone');

var june = moment("2014-06-01T12:00:00Z");
console.log(moment().tz("America/New_York").format());
console.log(june.tz('America/New_York').format('ha z'));    // 8am EDT)
console.log(june.tz('Australia/Sydney').format('ha z'));
