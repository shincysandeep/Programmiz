let m = new Map();
m.set('info',{age: 10, name:"Sam"});
console.log(m.get('info'));
for(let i of m.entries())
console.log(i);
