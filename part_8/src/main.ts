// <T> membuat generic type yang bisa diisi dengan tipe data apapun
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj({name: 'John'})) // true


const isTrue = <T>(arg: T): {arg: T, is: boolean} =>{
    if(Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(10)) // { arg: 0, is: false }

// <T> menggunakan interface
interface BoolCheck<T>{
    value: T,
    is: boolean
}

const CheckBoolValue = <T>(arg: T): BoolCheck<T> =>{
    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}


interface HasID{
    id: Number
}
// ini memberi tahu ke genertic type T untuk memiliki properti id
const processUser = <T extends HasID>(user: T): T =>{
    //process user with logic here
    return user
}

console.log(processUser({id: 1, name: 'John'}))
// dengan menghapus properti id, maka akan error
// console.log(processUser({name: 'John'}))



const getUserProperty = <T extends HasID, K extends keyof T>(user: T[], key: K): T[K][] =>{        
    return user.map((user) => user[key])
}

console.log(getUserProperty([{id: 1, name: 'John'}, {id: 2, name: 'Doe'}], 'name')) // [ 'John', 'Doe' ]

class stateObject<T>{
    private data: T
    constructor(Value: T){
        this.data = Value
    }

    get State():T {
        return this.data
    }

    set State(newData: T){
        this.data = newData
    }
}

const store = new stateObject("john")
console.log(store.State) // john
// store.State = 12 // error karena tipe data harus string, ini terjadi karena kita menggunakan generic type dan di line 76 sudah define string

const myState = new stateObject<(string | number | boolean)[]>([15])
myState.State = ['dave', 42, true]
console.log(myState.State) // [ 'dave', 42, true ]