//console.log(createCheckDigit("55555"));

function createCheckDigit(membershipId)
{
var value = membershipId;
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

//console.log(sum);
return sum
}
var mem =55555;
var num = createCheckDigit(mem);
if(num>9)
{
var new1 =createCheckDigit(num);
}

console.log(new1)
