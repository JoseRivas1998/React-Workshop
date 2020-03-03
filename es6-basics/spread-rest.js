const obj1 = {
    name: "Jose",
    age: 21
};

const obj2 = {
    ...obj1,
    job: "Tutor"
};

console.log(obj1);
console.log(obj2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8];

console.log(arr1);
console.log(arr2);

function addAll(...operands) {
    let sum = 0;
    for (let i = 0; i < operands.length; i++) {
        sum += operands[i];
    }
    return sum;
}

console.log(addAll(1, 2, 3, 4));
