function performOperation(){
    let num1 = parseInt(document.getElementById("input1").value)
    let num2 = parseInt(document.getElementById("input2").value)

    if (!isNaN(num1) && !isNaN(num2)){
        debugger          //activating debugger
        let result = multiply(num1, num2)
        displayResult(result)

        result = add(num1, num2)
        displayResult(result)

        result = subtract(num1, num2)
        displayResult(result)

        result = divide(num1, num2)
        displayResult(result)

    }else{
        displayResult(`Please enter valid numbers`)
    }
}

function multiply(a, b){
    return a * b
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function divide(a, b){
    return a / b
}
function displayResult(result){
    const resultElement = document.getElementById("result")
    resultElement.textContent = `The result is: ${result}`
}