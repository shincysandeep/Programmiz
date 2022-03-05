const count = 3;
let promise = new Promise(function(resolve,reject)
{
    if( count==1)
    resolve('All done');
    else if(count ==3)
   reject('More waiting');

});
console.log(promise);

const count1 = true;

let countValue = new Promise(function (resolve, reject) {
    if (count1) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);