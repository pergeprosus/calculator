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
    let number1 = parseInt(num1);
    let num2 = b;
    let number2 = parseInt(num2);
    if (opp == ("/")) {
        console.log(divide(number1, number2))
         return divide(number1, number2);
    }
    if (opp == ("+")) {
        console.log(add(number1, number2))
        return add(number1, number2);

    }
    if (opp == ("*") || opp.includes("x" || opp.includes("X"))) {
        console.log(multiply(number1, number2))
        return multiply(number1, number2);

    }
    if (opp == ("-")) {
        console.log(subtract(number1, number2))
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
let resetbutton = document.getElementById("reset");
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
            parseInt(but.id);
            firstequationumber += but.id;
            inputdisplay.innerHTML = firstequationumber;
            max++;
            console.log(firstequationumber);
        }
    })
}
//Clears the data and resets
reset.addEventListener('click', function () {
    inputdisplay.innerHTML = "";
    otherdisplay.innerHTML = "";
    currentequation = [];
    max = 0;
});
//Plus button for addition
plusbutton.addEventListener('click', function () {
    if (bothnumbers.length == 0) {
        bothnumbers.splice(0, 1, firstequationumber);
        inputdisplay.innerHTML += "+";
        firstequationumber = [];
        opp = ("+");
    }
    console.log(bothnumbers);
});
//Minus button for subtraction
minusbutton.addEventListener('click', function () {
    if (bothnumbers.length == 0) {
        bothnumbers.splice(0, 1, firstequationumber);
        inputdisplay.innerHTML += "-";
        firstequationumber = [];
        opp = ("-");
    }
    console.log(bothnumbers);
});
//Multiplication button (self explanatory)
multiplybutton.addEventListener('click', function () {
    if (bothnumbers.length == 0) {
        bothnumbers.splice(0, 1, firstequationumber);
        inputdisplay.innerHTML += "X";
        firstequationumber = [];
        opp = ("*");
    }
    console.log(bothnumbers);
});
//Equals button to decide the type of calculation
equalsbutton.addEventListener('click', function () {
    console.log(firstequationumber);
    //To see if the first slot isnt already taken (Might need modded soon)
    if (bothnumbers.length != 0) {
        bothnumbers.splice(1, 1, firstequationumber);
        let n1 = bothnumbers[0];
        let n2 = bothnumbers[1];
        let su1 = parseInt(n1);
        let su2 = parseInt(n2);
        //Operation
        operate(su1, su2);
        otherdisplay.innerHTML = operate(su1, su2);
    }
});