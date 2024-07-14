// Activity 1: Arithmetic Operations
function add(a, b) {
    let result = a + b;
    console.log("Addition:", result);
}


function subtract(a, b) {
    let result = a - b;
    console.log("Subtraction:", result);
}


function multiply(a, b) {
    let result = a * b;
    console.log("Multiplication:", result);
}


function divide(a, b) {
    if (b !== 0) {
        let result = a / b;
        console.log("Division:", result);
    } else {
        console.log("Error: Division by zero");
    }
}


function remainder(a, b) {
    let result = a % b;
    console.log("Remainder:", result);
}

// add(5, 3);  
// subtract(5, 3);  
// multiply(5, 3);  
// divide(6, 3);  
// remainder(5, 3);  


// Activity 2: Assignment Operators

let num = 5;
num += 3;
console.log("Updated num with +=:", num);

let num1 = 5;
num1 -= 3;
console.log("Updated num with -=:", num1);

// Activity 3: Comparison Operators

function compareGreaterLess(a, b) {
    console.log(`${a} > ${b}:`, a > b);
    console.log(`${a} < ${b}:`, a < b);
}

compareGreaterLess(5, 3);

function compareGreaterEqualLessEqual(a, b) {
    console.log(`${a} >= ${b}:`, a >= b);
    console.log(`${a} <= ${b}:`, a <= b);
}

compareGreaterEqualLessEqual(5, 3);

function compareEquality(a, b) {
    console.log(`${a} == ${b}:`, a == b);
    console.log(`${a} === ${b}:`, a === b);
}

compareEquality(5, '5');  

// Activity 4: Logical Operators

function logicalAnd(a, b) {
    console.log(`(${a} > 2 && ${b} < 5):`, a > 2 && b < 5);
}

logicalAnd(3, 4);  


function logicalOr(a, b) {
    console.log(`(${a} > 2 || ${b} < 5):`, a > 2 || b < 5);
}

logicalOr(1, 6); 

function logicalNot(a) {
    console.log(`!(${a} > 2):`, !(a > 2));
}

logicalNot(3);  

// Activity 5: Ternary Operator

function ternaryOperator(a, b) {
    let result = a > b ? "Greater" : "Lesser";
    console.log(result);
}


ternaryOperator(5, 3);




