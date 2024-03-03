// utility types

// partial

interface Assignmnet {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignmnet, propsToUpdate: Partial<Assignmnet>): Assignmnet => {
    return {
        ...assign,
        ...propsToUpdate
    }
}

const assign1: Assignmnet = {
    studentId: '123',
    title: "Final Exam",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 96 }))
const assignGraded: Assignmnet = updateAssignment(assign1, { grade: 96 })


// Requiered dan Readonly
const recordAssignment = (asssign: Required<Assignmnet>): Assignmnet => {
    //send to database etc
    return asssign
}

const assignVerif: Readonly<Assignmnet> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignVerif, verified: true})

// record
const hexColorMap: Record<string, string> = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
}

type Students = "Sara" | "Kelly"
type LetterGrade = "A" | "B" | "C" | "D" | "U"

const finalGrade: Record<Students, LetterGrade> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades{
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 90, assign2: 100 },
    Kelly: { assign1: 75, assign2: 0 }
}



// Pick and Omit
type AssignResult = Pick<Assignmnet, "studentId" | "grade">
const score: AssignResult = {
    studentId: "K123",
    grade: 85
}

type AssignPreview = Omit<Assignmnet, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "K123",
    title: "Final Exam"
}


// Exclude and Extract not work with interface
type adjustedGrade = Exclude<LetterGrade, "U">

type highGrades = Extract<LetterGrade, "A" | "B">

// NonNullable

type AllPossibleGrades = 'Dave' | 'John' | null | undefined

type NmaesOnly = NonNullable<AllPossibleGrades>

// ReturnType

// type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number) =>{
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)


// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["generic", 100]
const tsAssign2: NewAssign = createNewAssign(...assignArgs)

console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise
interface User{
    id: number,
    name: string,
    username: string,
    email: string,
}


const fetchUser = async () : Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
        ).then(res => {
            return res.json()
        }).catch(err => {
            if (err instanceof Error){
                console.log(err.message)
            }
        })
        return data
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser>>

fetchUser().then(user => console.log(user))