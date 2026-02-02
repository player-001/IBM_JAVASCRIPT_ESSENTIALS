try{
    const testKey = "__key__"
    localStorage.setItem(testKey, testKey)
    localStorage.removeItem(testKey)
    console.log("localStorage Available")
}
catch(e){
    console.log("localStorage Not Available")
}