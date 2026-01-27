let length
let width

function calculateArea(){
    length = parseFloat(document.getElementById("length").value)
    width = parseFloat(document.getElementById("width").value)

    let area = length * breadth
    document.getElementById("result").innerText = `The Area of the rectangle is: ${area}`
}