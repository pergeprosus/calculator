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
let plusbutton = document.getElementById("+");
let resetbutton = document.getElementById("reset");

//Maximum amount of numbers allowed on the display
let max = 0;
//Array to store the current equation
let firstequationumber = [];
let bothnumbers = [];
//Loop for adding click function to each button, and storing their ID
for (i = 0; i < allbuttons.length; i++) {
    let but = allbuttons[i];
    allbuttons[i].addEventListener('click', function () {
        if (max < 12) {
           // if (typeof firstequationumber != []])
            parseInt(but.id);
            firstequationumber += but.id;
            inputdisplay.innerHTML = firstequationumber;
            max++;
            console.log(firstequationumber);
        }
    })
}
reset.addEventListener('click', function () {
    inputdisplay.innerHTML = "";
    currentequation = [];
    max = 0;
});
//Test for addition
plusbutton.addEventListener('click', function () {
    //let
  
    if (bothnumbers.length == 0) {
    bothnumbers.splice(0, 1, firstequationumber);
    inputdisplay.innerHTML += "+";
    firstequationumber = [];
   }
    console.log(bothnumbers);
});
//Finding answer
equalsbutton.addEventListener('click', function () {
    console.log(firstequationumber);

    if (bothnumbers.length != 0) {
        bothnumbers.splice(1, 1, firstequationumber);
        let n1 = bothnumbers[0];
        let n2 = bothnumbers[1];
        let su1 = parseInt(n1);
        let su2 = parseInt(n2);
        console.log(add(su1, su2))
    }
});