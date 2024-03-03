"use strict";
class coder {
    constructor(name, music, age, lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const dave = new coder('Dave', 'Rock', 25);
console.log(dave.getAge());
// walaupun TS gk suka, tapi bakal ttp dijalankan di JS
// console.log(dave.age);
// console.log(dave.lang);
class webDev extends coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new webDev('Mac', 'Sara', 'Pop', 23);
console.log(Sara.getLang());
class guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new guitarist('Jimmy Page', 'Guitar');
console.log(page.play('plays'));
// ===============================
class peeps {
    static getCoutn() {
        return peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++peeps.count;
    }
}
peeps.count = 0; // static peroperty apply to the class, not any spesific instance that declare from class
const John = new peeps('John');
const steve = new peeps('steve');
const dimas = new peeps('dimas');
console.log(peeps.count);
// ===============================
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil', 'kevin'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'zz Top'];
console.log(myBands.data);
myBands.data = ['van hellen'];
console.log(myBands.data);
