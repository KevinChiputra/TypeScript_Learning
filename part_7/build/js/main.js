"use strict";
// contoh index signature
// interface TransactionObj{
//     [index: string]: number
// }
const todayTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todayTransaction.Pizza);
console.log(todayTransaction['Pizza']);
let prob = 'Pizza';
console.log(todayTransaction[prob]);
const todayNet = (transaction) => {
    let net = 0;
    for (let key in transaction) {
        net += transaction[key];
    }
    return net;
};
console.log(todayNet(todayTransaction)); // 35
const student1 = {
    name: 'John',
    GPA: 3.0,
    classes: [100, 200, 300]
};
// console.log(student1.test)
// solusi jika tidak terdapat index signature
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`);
}
Object.keys(student1).map(key => {
    console.log(student1[key]);
});
const logStudentKey = (student, key) => {
    console.log(`student ${key}: ${student[key]}`);
};
logStudentKey(student1, 'GPA');
const incomes = {
    salary: 1000,
    bonus: 500,
    sidehustle: 200
};
for (const key in incomes) {
    console.log(`${key}: ${incomes[key]}`);
}
