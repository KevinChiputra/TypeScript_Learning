// original js code
// const year = document.getElementById('year')!;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear

// varian yang aku buat
// const year = document.getElementById('year')!;
// const thisYear = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear


// 1st variant dari video
// let year: HTMLElement | null
// year = document.getElementById('year');
// let thisYear: string 
// thisYear = new Date().getFullYear().toString();
// if(year){
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear
// }

// 2nd variant dari video
const year = document.getElementById('year') as HTMLSpanElement;
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear