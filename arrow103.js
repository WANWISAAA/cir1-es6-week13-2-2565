//1.Arroe function with add
const add = function (a,b){
    return {a,b}
}
const {a,b} = sum(10,5)
console.log(`Totel ${a} + ${b} =  ${a+b}`)

//2.Short arrow function with mul
const mul = (a,b)=>a * b
const totel = sum(10,5)
console.log(`Sum ${a} + ${b} =  ${a+b}`)

//3.arrow function with div
const div=(a,b)=>a/b
const sumDiv = div(10,5)
console.log(`Div ${a} / ${b} =  ${sumDiv}`)

//4.Short arrow function with del
const del = (a,b)=>a-b
const sumDel = del(10,5)
console.log(`Div ${a} - ${b} =  ${sumDel}`)