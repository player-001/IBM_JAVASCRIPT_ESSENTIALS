// Global scope, accessible throughout the entire script
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";   //let is block bound, so beyond the block it is unaccessible
const blockConst = "I'm a block-scoped const"; //same for const
}

console.log(globalVar)
console.log(globalLet)
console.log(globalConst)

//console.log(blockVar) //won't work
//console.log(blockLet)  //won't work


function show(){
    var functionVar = "i am a function-scoped var"
    let functionLet = "i am a block-scoped let"
    const functionConst = "i am a block-scoped const"
}

show()
//console.log(functionVar)   //won't work as var is function bound
//console.log(functionlet)   //won't work as let is block bound
//console.log(functionConst) //won't work as const is block bound

{
    let a = 1
    var b = 2
    const c = 3

    a = 4
    b = 5
    //c = 6   //constants cannot be reassigned on the same block
}

a = 6
b = 8
c = 9

