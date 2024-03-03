"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// penggunaan <type> tidak bekerja di JSX, jadi lebih baik menggunakan as
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat') ini menjelaskan bahwa kita akan return string menggunakan as, jika tidak menggunakan as TS akan menganggapnya sebagai number | string
let myVal = addOrConcat(2, 2, 'concat');
// Hati" TS melihat tidak masalah - tapi string di return
let nexVal = addOrConcat(2, 2, 'add');
// DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myImg');
const nextImg = document.getElementById('#myImg');
img.src;
// myImg.src // error karena TS tidak tahu bahwa ini adalah HTMLImageElement
myImg.src;
