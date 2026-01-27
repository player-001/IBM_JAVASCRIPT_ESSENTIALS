// Global scope, accessible throughout the entire script
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope  between curly brackets is a block
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";   //let is block bound, so beyond the block it is unaccessible
const blockConst = "I'm a block-scoped const"; //same for const
}

console.log(globalVar)
console.log(globalLet)
console.log(globalConst)

console.log(blockVar)
//console.log(blockLet) //won't work as let is block-scoped


function show(){
    var functionVar = "I am a function-scoped var"
    let functionLet = "I am a block-scoped let"
    const functionConst = "i am a block-scoped const"
}
show()

//console.log(functionVar)   //won't work as var is function-scoped
//console.log(functionLet)   //won't work as let is block-scoped
//console.log(functionConst)  //won't work as const is block-scoped

{
    var a = 5
    let b = 6
    const c = 7

    a = 8
    b = 9
    //c = 10 constants cannot be reassigned

}

a = 11
b = 12
c = 13

