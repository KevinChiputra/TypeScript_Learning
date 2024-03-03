let stringArr = ['one', 'hey', 'kevin']

let guitars = ['strat', 'les paul', 5150]

let mixedData = ['EVH', 1984, true]

// =========================

let test = [] // any data can push

let bands: string[] = []
bands.push('chi')

// tuple
let myTuple: [string, number, boolean] = ['dDave', 34, true]

let mixed = ['john', 1, false]

// object

let myObj: object;
myObj = [] 


const exampleObj = {
    prop1: 'dave',
    prop2: true
}

// jika mau buat object dgn spesifik data type

// type Guitarist = {
//     name: string,
//     active?: boolean, // artinya opsional
//     albums: (string | number)[]
// }

// atau cara penulisan lain menggunakan interface

interface Guitarist {
    name: string,
    active?: boolean, // artinya opsional
    albums: (string | number)[]
}



let evh: Guitarist = {
    name: 'Dva',
    active: false,
    albums: [1989, 9999, 1111]
}

let JP: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: [1989, 9999, 1111]
}

const greeGuitarist = (guitarist : Guitarist) =>{
    return `Hello ${guitarist.name}`
}

console.log(greeGuitarist(JP))


// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

