// index signature
// ini artinya code dapat menambahkan properti baru, tetapi perlu ada pizza, books, dan job
interface TransactionObj{
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number,
}
// contoh index signature
// interface TransactionObj{
//     [index: string]: number
// }

const todayTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}


console.log(todayTransaction.Pizza)
console.log(todayTransaction['Pizza'])

let prob: string = 'Pizza'
console.log(todayTransaction[prob])

const todayNet = (transaction: TransactionObj):
number => {
    let net = 0
    for (let key in transaction){
        net += transaction[key]
    }
    return net
}

console.log(todayNet(todayTransaction)) // 35

// ================================================================================================

interface student{
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}


const student1: student = {
    name: 'John',
    GPA: 3.0,
    classes: [100, 200, 300]
}

// console.log(student1.test)

// solusi jika tidak terdapat index signature
for(const key in student1){
    console.log(`${key}: ${student1[key as keyof student]}`)
}

Object.keys(student1).map(key => {
    console.log(student1[key as keyof student])
})

const logStudentKey = (student: student, key: keyof student): void => {
    console.log(`student ${key}: ${student[key]}`)
}

logStudentKey(student1, 'GPA')


// ================================================================================================

// interface Incomes{
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
// jika mau memiliki 3 type di atas bisa pakai metode di bawah
// pengunaan record utility type
type Incomes = Record<Streams, number>

const incomes: Incomes = {
    salary: 1000,
    bonus: 500,
    sidehustle: 200
}

for (const key in incomes){
    console.log(`${key}: ${incomes[key as keyof Incomes]}`)
}