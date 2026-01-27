let count = 0

function increaseCount(){
    count ++
    displayCount()
    checkCountValue()
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count
}

function checkCountValue(){
    if (count === 10){
        alert("Your gained 10 followers !")
    }
    else if(count === 20){
        alert("You gained 20 followers ! keep it up!")
    }
}

function reset(){
    count = 0
    displayCount()
    alert("Count was reset to 0")
}

