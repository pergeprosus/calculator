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

let opp;
let operate = (a, b) => {
    //Might need to change "includes" to "is" so that it's absolute and stuff
    let num1 = a;
    let number1 = parseFloat(num1);
    let num2 = b;
    let number2 = parseFloat(num2);
    if (opp == ("/")) {
        return divide(number1, number2);
    }
    if (opp == ("+")) {
        return add(number1, number2);

    }
    if (opp == ("*") || opp.includes("x" || opp.includes("X"))) {
        return multiply(number1, number2);

    }
    if (opp == ("-")) {
        return subtract(number1, number2);

    }

}
//Array of numbers testing
let numarray = [];
//Testing button functionality
let buttontest = document.getElementById('calcbutton');
let allbuttons = document.getElementsByClassName("calcbutton");
let inputdisplay = document.getElementById("mathdisplay");
let otherdisplay = document.getElementById("inputdisplay")
let equalsbutton = document.getElementById("equation");
let plusbutton = document.getElementById("+");
let minusbutton = document.getElementById("-");
let multiplybutton = document.getElementById("ex");
let divisionbutton = document.getElementById("/");
let resetbutton = document.getElementById("reset");
let ans;
//True false statements for deciding what calculation to do
let ploose;
let meenus;
let diveed;
let multood;
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
            parseFloat(but.id);
            firstequationumber += but.id;
            inputdisplay.innerHTML += but.id
            max++;
            console.log(firstequationumber);
        }
    })
}
//Clears the data and resets
reset.addEventListener('click', function () {
    inputdisplay.innerHTML = "";
    otherdisplay.innerHTML = "";
    bothnumbers = [];
    firstequationumber = [];
    max = 0;
    ans = undefined;
});
//Plus button for addition
plusbutton.addEventListener('click', function () {
    if (firstequationumber[0] == []) {
        bothnumbers.splice(0, 1, firstequationumber);
    }
    else {
        bothnumbers.splice(1, 1, firstequationumber);
    }
    if (ans == undefined) {
    inputdisplay.innerHTML += " + ";
    }
    else {
    inputdisplay.innerHTML = [];
    inputdisplay.innerHTML += "ANS + ";
    }
    firstequationumber = [];
    opp = ("+");

    console.log(bothnumbers);
});
//Minus button for subtraction
minusbutton.addEventListener('click', function () {
    if (firstequationumber[0] == []) {
        bothnumbers.splice(0, 1, firstequationumber);
    }
    else {
        bothnumbers.splice(1, 1, firstequationumber);
    }
    if (ans == undefined) {
        inputdisplay.innerHTML += " - ";
        }
        else {
        inputdisplay.innerHTML = [];
        inputdisplay.innerHTML += "ANS - ";
        }
    firstequationumber = [];
    opp = ("-");

    console.log(bothnumbers);
});
//Multiplication button (self explanatory)
multiplybutton.addEventListener('click', function () {

    if (firstequationumber[0] == []) {
        bothnumbers.splice(0, 1, firstequationumber);
    }
    else {
        bothnumbers.splice(1, 1, firstequationumber);
    }
    if (ans == undefined) {
        inputdisplay.innerHTML += " x ";
        }
        else {
        inputdisplay.innerHTML = [];
        inputdisplay.innerHTML += "ANS x ";
        }
    firstequationumber = [];
    opp = ("*");

    console.log(bothnumbers);
});
//Division button (self explanatory)
divisionbutton.addEventListener('click', function () {

    if (firstequationumber[0] == []) {
        bothnumbers.splice(0, 1, firstequationumber);
    }
    else {
        bothnumbers.splice(1, 1, firstequationumber);
    }
    if (ans == undefined) {
        inputdisplay.innerHTML += " / ";
        }
        else {
        inputdisplay.innerHTML = [];
        inputdisplay.innerHTML += "ANS / ";
        }
    firstequationumber = [];
    opp = ("/");

    console.log(bothnumbers);
});
//Equals button to decide the type of calculation
equalsbutton.addEventListener('click', function () {
    console.log(bothnumbers);
    //To see if the first slot isnt already taken (Might need modded soon)
    if (bothnumbers.length != 0) {
        bothnumbers.splice(1, 1, firstequationumber);
        let n1 = bothnumbers[0];
        let n2 = bothnumbers[1];
        let su1 = parseFloat(n1);
        let su2 = parseFloat(n2);
        //Operation
        //operate(su1, su2);
        //Eventually: make it so that if this already happened, 
        //use the operate answer maybe as a element as the first thing 
        //inside of the container.
        let testresult = operate(su1, su2);
        if (testresult.isNaN = true) {
            otherdisplay.innerHTML = "ERROR";
        }
        else {
            otherdisplay.innerHTML = operate(su1, su2);
        }
        bothnumbers = [];
         ans = operate(su1, su2);
        bothnumbers[0] = ans;
        console.log(bothnumbers);
        console.log('instance complete')
    }
});

//CURRENT GOAL: ADD A CHECK FOR ONLY ADDING 2 NUMBERS AT A TIME
