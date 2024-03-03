"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: "Final Exam",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 96 }));
const assignGraded = updateAssignment(assign1, { grade: 96 });
// Requiered dan Readonly
const recordAssignment = (asssign) => {
    //send to database etc
    return asssign;
};
const assignVerif = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignVerif), { verified: true }));
// record
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
const finalGrade = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 90, assign2: 100 },
    Kelly: { assign1: 75, assign2: 0 }
};
const score = {
    studentId: "K123",
    grade: 85
};
const preview = {
    studentId: "K123",
    title: "Final Exam"
};
// ReturnType
// type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["generic", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUser().then(user => console.log(user));
