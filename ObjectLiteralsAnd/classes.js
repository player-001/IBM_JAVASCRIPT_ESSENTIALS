class class1{
    constructor(a, b){
        this.a = a
        this.b = b
    }
    prnt(){
        console.log(this.a)
    }
}

const obj1 = class1(10, 20)
obj1.prnt()

//Object Literals
const Person = {
    firstName: "Mohit",
    call: function(){
        console.log(`${thid.firstName}`)
    }
}


//function Costructor
function Process(data){
    this.data = data
    this.prnt = function(){
        console.log(this.data)
    }
    return this.data + 1
}