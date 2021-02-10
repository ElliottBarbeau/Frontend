/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);

const firstName = "Elliott";
const job = "student";

const elliottNew = `I'm ${firstName}, a ${job}`;
console.log(elliottNew);

console.log(`Multi
lines
string`)

const age = 19
const isOldEnough = age >= 18

if (isOldEnough) {
    console.log("Old enough");
} else {
    console.log("Not old enough");
}


const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;

const markBmi = markMass / markHeight ** 2
const johnBmi = johnMass / johnHeight ** 2

const markHigherBMI = markBmi > johnBmi;

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's (${johnBmi}) BMI is higher than Mark's (${markBmi})!`);
}

const inputYear = '1991';
console.log(inputYear);
inputYear = Number(inputYear);
console.log(inputYear);

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (97 + 112 + 101) / 3;

if (avgDolphins > avgKoalas) {
    console.log("Dolphins win!");
} else if (avgKoalas > avgDolphins) {
    console.log("Koalas win!")
} else {
    console.log("It's a draw!")
}

const day = "thursday";

switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    case "wednesday":
    case "thursday":
        console.log("wednesday or thursday");
        break;
}

const age = 17;
age >= 18 ? console.log("I am over 18") : console.log("I am under 18");

*/

const billValue = 430;
const betweenNumbers = billValue <= 300 && billValue >= 50;

let tip;
betweenNumbers ? tip = 15 : tip = 20;

console.log(`The bill was ${billValue}, the tip was ${billValue * (tip/100)}, and the total value was ${billValue + (billValue * (tip/100))}`);