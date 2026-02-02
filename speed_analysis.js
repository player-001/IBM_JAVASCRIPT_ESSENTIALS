let testText = "The quick brown fox jumps over the lazy dog"
let startTime, endTime

function startText(){
    document.getElementById("inputText").value = testText

    let userInput = document.getElementById("userInput")
    userInput.value = ""
    userInput.readonly = false
    userInput.focus();
    document.getElementById("output").innerHTML = ""   //reset the output

    startTime = new Date().getTime()
}

function endtest(){
    endTime = new Date().getTime()

    document.getElementById("userInput").readOnly = true
    var timeElapsed = (endTime - startTime) / 1000
    var userTypedText = document.getElementById("userInput").value

    var typedWords = userTypedText.split(/\s+/).filter((word) => {
        return word !== ""
    }).length

    var wpm = 0   //default value
    


}