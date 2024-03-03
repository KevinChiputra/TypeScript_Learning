// type alias
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray // type alias iniside type alias
}

type UserId = stringOrNumber

// LIteral Types
let myName: 'Dave'

let userName: 'Dave' | 'john' | 'kevin' // artinya username hanya bs memiliki 3 value ini


// function
const add = (a:number, b:number) => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('hello')
logMsg(add(2, 3))

// sama seperti cara penulisan di arrow function
const substract = function(c: number, d: number):
number {
    return c - d
}

// cara pakai literal alias pd function
type mathFunction = (a: number, b: number) => number
// ini cara penulisan jika pakai interface
// interface mathFunction{
//     (a: number, b: number): number
// }

let multiply: mathFunction = (c, d) => {
    return c * d
}

logMsg(multiply(2, 2))


// optional parameters
const addAll = (a: number, b: number, c?:number):
number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

// penggunaan default value
const sumAll = (a: number, b: number, c:number = 2):
number => {
    return a + b + c
}


// Rest parameter
const total = (...nums: number[]) => {
    return nums.reduce((prev, curr) => prev + curr, 2)
}

logMsg(total(1, 2, 3, 4))


const createError = (errMsg: string): never =>{
    throw new Error(errMsg)
}

const infinite = () =>{
    let i: number = 1
    while(true){
        i++
        if(i > 100) break
    }
}

// custom type Guard
const isNum = (value: number): boolean => {
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string):
string => {
    if(typeof value === 'string') return 'string'
    if(typeof isNum(value) === 'number') return 'number'
    return createError('this hsould never')
}


