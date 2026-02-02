let testText = "The quick brown fox jumps over the lazy dog."
let startTime, endTime

function startTest(){
    document.getElementById("inputText").value = testText

    let userInput = document.getElementById("userInput")
    userInput.value = ""
    userInput.readonly = false
    userInput.focus();
    document.getElementById("output").innerHTML = ""   //reset the output

    startTime = new Date().getTime()
}

function endTest(){
    endTime = new Date().getTime()

    document.getElementById("userInput").readOnly = true
    var timeElapsed = (endTime - startTime) / 1000
    var userTypedText = document.getElementById("userInput").value

    var typedWords = userTypedText.split(/\s+/).filter((word) => {   //using regex between backslashes
        return word !== ""
    }).length

    var wpm = 0   //default value

    if (timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60)
    }

    var outputDiv = document.getElementById("output")
    outputDiv.innerHTML = "<h2> Typing Test Results: </h2>"+
    "<p> Total Length: " + userTypedText.length + "</p>"+
    "<p> Words Typed: " + typedWords + "</p>" + 
    "<p> Time Elapsed: " + timeElapsed.toFixed(2) + "seconds</p>" + 
    "<p> Words Per Minute (WPM): " + wpm + "</p>"
}