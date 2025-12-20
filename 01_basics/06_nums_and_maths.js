let num = new Number(50);
// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))
let otherNum = new Number(100.8965)
// console.log(otherNum.toFixed(2))
// console.log(otherNum.toPrecision(4))
let numOne = 10000000;
// console.log(numOne.toLocaleString('eg-UK'))

// ++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++

let min = 10;
let max = 25;
console.log(Math.floor(Math.random()*(max-min+1))+min)