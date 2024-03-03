"use strict";
let stringArr = ['one', 'hey', 'kevin'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
// =========================
let test = []; // any data can push
let bands = [];
bands.push('chi');
// tuple
let myTuple = ['dDave', 34, true];
let mixed = ['john', 1, false];
// object
let myObj;
myObj = [];
const exampleObj = {
    prop1: 'dave',
    prop2: true
};
let evh = {
    name: 'Dva',
    active: false,
    albums: [1989, 9999, 1111]
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: [1989, 9999, 1111]
};
const greeGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
console.log(greeGuitarist(JP));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
