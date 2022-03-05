const count1 = false;

let countValue = new Promise(function (resolve, reject) {
    if (count1) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);