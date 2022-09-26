//Addition
let add = (a, b) => {
    console.log(a + b);
    return a + b;
}
//Subtraction
let subtract = (a, b) => {
    console.log(a - b);
    return a - b;
}
//Multiplication
let multiply = (a, b) => {
    console.log(a * b);
    return a * b;
}
//Division
let divide = (a, b) => {
    console.log(a / b);
    return a / b;
}
let operate = (a, b) => {
    let num1 = prompt("First number");
    let number1 = parseInt(num1);
    let opp = prompt("Operator");
    let num2 = prompt("Second number");
    let number2 = parseInt(num2);
    if (opp.includes("*") || opp.includes("x" || opp.includes("X"))) {
        console.log(multiply(number1, number2))
    }
}
operate();