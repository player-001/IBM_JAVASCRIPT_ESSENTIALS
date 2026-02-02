let books = []

function addBook(){
    const bookName = document.getElementById("bookName").value
    const authorName = document.getElementById("authorName").value
    const bookDescription = document.getElementById("bookDescription").value
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value)

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber        }
    
        books.push(book)
        console.log(book["name"])    //can also be accesed using bracket notation
        showbooks()
        clearInputs()
    }
    else{
        alert("Please fill in all the fields correctly!")
    }

}

function showbooks(){
    const booksDiv = books.map((book, index) => {
        const data = `<h1>book Number: ${index + 1}</h1>
        <p> <strong> Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>No. of. Pages:</strong> ${book.pagesNumber} pages(s)</p><br>
        <button onclick = "editbook(${index})">Edit </button>
        <button onclick = "deleteBook(${index})">Delete</button>`
        return data
    })
    document.getElementById("books").innerHTML = booksDiv.join("")
}

function editbook(index){
    const book = books[index]
    document.getElementById("bookName").value = book.name
    document.getElementById("authorName").value = book.authorName
    document.getElementById("bookDescription").value = book.bookDescription
    document.getElementById("pagesNumber").value = book.pagesNumber
    books.splice(index, 1)  //remove old entry
    showbooks()
}

function clearInputs(){
    document.getElementById("bookName").value = ""
    document.getElementById("authorName").value = ""
    document.getElementById("bookDescription").value = ""
    document.getElementById("pagesNumber").value = ""
}

function deleteBook(index){
    books.splice(index, 1)
    showbooks()
}
