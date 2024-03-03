type one = string
type two = string | number
type three = 'hello'


//convert to more or less specific
let a: one = 'hello'
let b = a as two // less specific
let c = a as three // more specific

// penggunaan <type> tidak bekerja di JSX, jadi lebih baik menggunakan as
let d = <one>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): 
number | string => {
    if(c==='add'){
        return a + b
    }
    return '' + a + b
}

// let myVal: string = addOrConcat(2,2,'concat') ini menjelaskan bahwa kita akan return string menggunakan as, jika tidak menggunakan as TS akan menganggapnya sebagai number | string
let myVal: string = addOrConcat(2,2,'concat') as string

// Hati" TS melihat tidak masalah - tapi string di return
let nexVal: number = addOrConcat(2,2,'add') as number


// DOM

const img = document.querySelector('img')!
const myImg = document.getElementById('#myImg')! as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#myImg')


img.src
// myImg.src // error karena TS tidak tahu bahwa ini adalah HTMLImageElement
myImg.src