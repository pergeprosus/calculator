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
let back = document.getElementById("back");
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
let toggle = 0;
lights.addEventListener('click', function () {
    if (toggle == 0) {
        document.getElementById("calcbody").style.boxShadow = "-1vh 1vh 70vw white";
        toggle = 1;
    }
    else {
        document.getElementById("calcbody").style.boxShadow = "0vh 0vh 0vw #1a6a19";
        toggle = 0;
    }
});








//Loop for adding click function to each button, and storing their ID
for (i = 0; i < allbuttons.length; i++) {
    let but = allbuttons[i];
    allbuttons[i].addEventListener('click', function () {
        if (max < 12) {
            if (ans == undefined) {
                otherdisplay.innerHTML += but.id;
                // if (typeof firstequationumber != []])
                parseFloat(but.id);
                firstequationumber += parseFloat(but.id);
                //  inputdisplay.innerHTML += but.id
                max++;
                console.log(firstequationumber);
            }
            else {
                inputdisplay.innerHTML = "";
                otherdisplay.innerHTML = "";
                bothnumbers = [];
                firstequationumber = [];
                max = 0;
                ans = undefined;
                opp = undefined;
                otherdisplay.innerHTML += but.id;
                // if (typeof firstequationumber != []])
                parseFloat(but.id);
                firstequationumber += parseFloat(but.id);
                //  inputdisplay.innerHTML += but.id
                max++;
                console.log(firstequationumber);
            }
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
    opp = undefined;
});
//Plus button for addition
plusbutton.addEventListener('click', function () {
    if (ans == undefined && opp == undefined) {
    if (bothnumbers.length != 0) {
        bothnumbers.splice(1, 1, firstequationumber);
        let n1 = bothnumbers[0];
        let n2 = bothnumbers[1];
        let su1 = parseFloat(n1);
        let su2 = parseFloat(n2);
        let testresult = operate(su1, su2);
        if (testresult == Infinity || isNaN(testresult)) {
            otherdisplay.innerHTML = "BRUH";
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
    inputdisplay.innerHTML += firstequationumber;
    otherdisplay.innerHTML = "";
    if (firstequationumber[0] == []) {
        bothnumbers.splice(0, 1, firstequationumber);
    }
    else {
        bothnumbers.splice(1, 1, firstequationumber);
    }
    inputdisplay.innerHTML += " + ";
        firstequationumber = [];

        opp = ("+");

    console.log(bothnumbers);
}
});
//Minus button for subtraction
minusbutton.addEventListener('click', function () {
    if (ans == undefined && opp == undefined) {
        if (bothnumbers.length != 0) {
            bothnumbers.splice(1, 1, firstequationumber);
            let n1 = bothnumbers[0];
            let n2 = bothnumbers[1];
            let su1 = parseFloat(n1);
            let su2 = parseFloat(n2);
            let testresult = operate(su1, su2);
            if (testresult == Infinity || isNaN(testresult)) {
                otherdisplay.innerHTML = "BRUH";
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
        inputdisplay.innerHTML += firstequationumber;
        otherdisplay.innerHTML = "";
        if (firstequationumber[0] == []) {
            bothnumbers.splice(0, 1, firstequationumber);
        }
        else {
            bothnumbers.splice(1, 1, firstequationumber);
        }
        inputdisplay.innerHTML += " - ";
        firstequationumber = [];

        opp = ("-");

        console.log(bothnumbers);
    }
});
//Multiplication button (self explanatory)
multiplybutton.addEventListener('click', function () {
    if (ans == undefined && opp == undefined) {
        if (bothnumbers.length != 0) {
            bothnumbers.splice(1, 1, firstequationumber);
            let n1 = bothnumbers[0];
            let n2 = bothnumbers[1];
            let su1 = parseFloat(n1);
            let su2 = parseFloat(n2);
            let testresult = operate(su1, su2);
            if (testresult == Infinity || isNaN(testresult)) {
                otherdisplay.innerHTML = "BRUH";
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
        inputdisplay.innerHTML += firstequationumber;
        otherdisplay.innerHTML = "";

        if (firstequationumber[0] == []) {
            bothnumbers.splice(0, 1, firstequationumber);
        }
        else {
            bothnumbers.splice(1, 1, firstequationumber);
        }
        inputdisplay.innerHTML += " x ";
        firstequationumber = [];

        opp = ("*");

        console.log(bothnumbers);
    }
});
//Backspace
back.addEventListener('click', function () {
    otherdisplay.innerHTML = otherdisplay.innerHTML.substring(0, otherdisplay.innerHTML.length - 1);
    firstequationumber = Math.floor(firstequationumber / 10);
    if (max > 0) {
        max--;
    }
    console.log(firstequationumber);
    if (firstequationumber == 0) {
        inputdisplay.innerHTML = "";
        otherdisplay.innerHTML = "";
        bothnumbers = [];
        firstequationumber = [];
        max = 0;
        ans = undefined;
    }

});
//Division button (self explanatory)
divisionbutton.addEventListener('click', function () {
    if (ans == undefined && opp == undefined) {
        if (bothnumbers.length != 0) {
            bothnumbers.splice(1, 1, firstequationumber);
            let n1 = bothnumbers[0];
            let n2 = bothnumbers[1];
            let su1 = parseFloat(n1);
            let su2 = parseFloat(n2);
            let testresult = operate(su1, su2);
            if (testresult == Infinity || isNaN(testresult)) {
                otherdisplay.innerHTML = "BRUH";
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
        inputdisplay.innerHTML += firstequationumber;
        otherdisplay.innerHTML = "";

        if (firstequationumber[0] == []) {
            bothnumbers.splice(0, 1, firstequationumber);
        }
        else {
            bothnumbers.splice(1, 1, firstequationumber);
        }
        inputdisplay.innerHTML += " / ";
        firstequationumber = [];

        opp = ("/");

        console.log(bothnumbers);
    }
});
//Equals button to decide the type of calculation
equalsbutton.addEventListener('click', function () {
    if (ans == undefined && bothnumbers[0] !== undefined) {
        inputdisplay.innerHTML += firstequationumber;
        console.log(bothnumbers);
        //To see if the first slot isnt already taken (Might need modded soon)
        if (bothnumbers.length != 0) {
            bothnumbers.splice(1, 1, firstequationumber);
            let n1 = bothnumbers[0];
            let n2 = bothnumbers[1];
            let su1 = parseFloat(n1);
            let su2 = parseFloat(n2);
            let testresult = operate(su1, su2);
            if (testresult == Infinity || isNaN(testresult)) {
                otherdisplay.innerHTML = "SYNTAX OOPSIE";
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
    }
});

//CURRENT GOAL: FIX DOUBLE NUMBERING WHEN EQUALING FIRST
