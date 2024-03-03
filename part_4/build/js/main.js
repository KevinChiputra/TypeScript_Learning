"use strict";
// LIteral Types
let myName;
let userName; // artinya username hanya bs memiliki 3 value ini
// function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 3));
// sama seperti cara penulisan di arrow function
const substract = function (c, d) {
    return c - d;
};
// ini cara penulisan jika pakai interface
// interface mathFunction{
//     (a: number, b: number): number
// }
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// penggunaan default value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// Rest parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 2);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type Guard
const isNum = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof isNum(value) === 'number')
        return 'number';
    return createError('this hsould never');
};
