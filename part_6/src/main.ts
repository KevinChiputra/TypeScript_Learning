class coder{



    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge(){
        return `Hello, I'm ${this.age} years old`
    }
}

const dave = new coder('Dave', 'Rock', 25);
console.log(dave.getAge());
// walaupun TS gk suka, tapi bakal ttp dijalankan di JS
// console.log(dave.age);
// console.log(dave.lang);

class webDev extends coder{
    constructor(public computer: string, name: string, music: string, age: number){
        super(name, music, age);
        this.computer = computer;
    }
    public getLang(){
        return `I write ${this.lang}`
    }
}

const Sara = new webDev('Mac', 'Sara', 'Pop', 23);
console.log(Sara.getLang());
// age tidak akan dijalankan karena private dan private hanya diakses di class itu sendiri. Berbeda dengan protected yang bisa diakses di class turunan
// console.log(Sara.age);
// console.log(Sara.lang);

interface musician{
    name: string;
    instrument: string;
    play(action: string): string;
}

class guitarist implements musician{
    name: string;
    instrument: string;

    constructor(name: string, instrument: string){
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const page = new guitarist('Jimmy Page', 'Guitar');
console.log(page.play('plays'));

// ===============================

class peeps{
    static count: number = 0 // static peroperty apply to the class, not any spesific instance that declare from class

    static getCoutn(){
        return peeps.count;
    }

    public id: number
    constructor(public name: string){
        this.name = name;
        this.id = ++peeps.count;
    }
}

const John = new peeps('John');
const steve = new peeps('steve');
const dimas = new peeps('dimas');

console.log(peeps.count);

// ===============================

class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = [];
    }

    public get data(){
        return this.dataState;
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value;
            return
        }else{
            throw new Error('Param is not an array of strings')
        }
    }
}


const myBands = new Bands();
myBands.data = ['Neil', 'kevin']
console.log(myBands.data);
myBands.data = [...myBands.data, 'zz Top']
console.log(myBands.data);
myBands.data = ['van hellen']
console.log(myBands.data);