//Addition
let add = (a, b) => {

    return a + b;
}
//Subtraction
let subtract = (a, b) => {

    return a - b;
}
//Multiplication
let multiply = (a, b) => {

    return a * b;
}
//Division
let divide = (a, b) => {

    return a / b;
}
let operate = (a, b) => {
    //Might need to change "includes" to "is" so that it's absolute and stuff
    let num1 = prompt("First number");
    let number1 = parseInt(num1);
    let opp = prompt("Operator");
    let num2 = prompt("Second number");
    let number2 = parseInt(num2);
    if (opp == ("/")) {
        console.log(divide(number1, number2))
    }
    if (opp == ("+")) {
        console.log(add(number1, number2))
    }
    if (opp == ("*") || opp.includes("x" || opp.includes("X"))) {
        console.log(multiply(number1, number2))
    }
    if (opp == ("-")) {
        console.log(subtract(number1, number2))
    }

}

//Array of numbers testing
let numarray = [];


//Testing button functionality
let buttontest = document.getElementById('calcbutton');
let allbuttons = document.getElementsByClassName("calcbutton");
let inputdisplay = document.getElementById("mathdisplay");
let equalsbutton = document.getElementById("equation");
let resetbutton = document.getElementById("reset");

//Maximum amount of numbers allowed on the display
let max = 0;
//Array to store the current equation
let currentequation = [];
//Loop for adding click function to each button, and storing their ID
for (i = 0; i < allbuttons.length; i++) {
    let but = allbuttons[i];
    console.log(but.id)
    allbuttons[i].addEventListener('click', function () {
       if (max < 12) {
        currentequation += but.id;
        inputdisplay.innerHTML = currentequation;
        max++;
       }
    })
}
reset.addEventListener('click', function () {
    inputdisplay.innerHTML = "";
    currentequation = [];
    max = 0;
});
