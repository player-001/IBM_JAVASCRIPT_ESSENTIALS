let amt1 = parseFloat(document.getElementById("grocery1").value)
let amt2 = parseFloat(document.getElementById("grocery2").value)
let amt3 = parseFloat(document.getElementById("grocery3").value)

function addGrocery(a, b, c){
    let sum_ = a + b + c
    return sum_
}

function showSum(){
    let s = addGrocery(amt1, amt2, amt3)
    document.getElementById("result").innerText = `The total amount is :$ ${s}`
}