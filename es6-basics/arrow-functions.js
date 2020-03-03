function sayHello() {
    console.log("Hello World");
}

function printSquare(x) {
    console.log(x * x);
}

function add(a, b) {
    return a + b;
}

sayHello();
printSquare(5);
console.log(add(4, 5));

const sayGoodbye = () => {
    console.log("Good Bye!");
};

const printCube = x => {
    console.log(x * x * x);
};

const sub = (a, b) => a - b;

sayGoodbye();
printCube(5);
console.log(sub(4, 5));
