var x = 3;
{
    var x = 7;
    console.log("X in block: " + x);
}
console.log("X out of block: " + x);

let y = 3;
{
    let y = 7;
    console.log("Y in block: " + y);
}
console.log("Y out of block: " + y);

const PI = 3.14159;

// PI = 4; this is an error

const obj = {
    name: "Jose",
    age: 21
};

console.log(obj);
// obj = {name: "John"}; This is an error

obj.name = "John";
console.log(obj);
