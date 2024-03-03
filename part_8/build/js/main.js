"use strict";
// <T> membuat generic type yang bisa diisi dengan tipe data apapun
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj({ name: 'John' })); // true
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(10)); // { arg: 0, is: false }
const CheckBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// ini memberi tahu ke genertic type T untuk memiliki properti id
const processUser = (user) => {
    //process user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'John' }));
// dengan menghapus properti id, maka akan error
// console.log(processUser({name: 'John'}))
const getUserProperty = (user, key) => {
    return user.map((user) => user[key]);
};
