const person = {
    name: "Shincy",
    Age:30
}
const handler ={ 
    get: function(person,name1)
    {
        if(name1=='name')
        return "You got it right";
        else return "wrong";
    }
}
const setting = {
    set: function(person,key,value)
    {person[key] = value;
    return;}
}
const myproxy = new Proxy(person,handler);
const newproxy=new Proxy(person, setting);
console.log(myproxy.name);
console.log(myproxy.Age);
console.log(person.Age);
console.log(person.name);
newproxy.salary=1000;
console.log(newproxy);

console.log(person.salary);
