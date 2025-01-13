
const libraryContainer = document.querySelector(".library");

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++){
        const individualBook = document.createElement('div');
        individualBook.classList.add('bookcontainer');
        
        let bookTitle = document.createElement('p');
        bookTitle.innerText = title;
        
        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = author;
        
        let bookCategory = document.createElement('p');
        bookCategory.innerText = category;
        
        let bookRead = document.createElement('button');
        if(read == false){
            bookRead.innerText = "No";
        }
        else {
            bookRead.innerText = "Yes"
        }
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete'
    }
}


const myLibrary = [];

function Book(title,author,category,read){
    this.title = title;
    this.author = author;
    this.category =category;
    this.read = read;
}

function addBookToLibrary(title,author,category,read){
    const book = new Book(title,author,category,read)
    myLibrary.push(book);
}

Book.prototype.printDetails = function() {
    return "Title: " + title + " Author: " + author + " Category: " + category + " Have read: " + read;

}



function deleteBook(title){
    for( let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i]
        if (book.title === title){
            myLibrary.splice(i,1);
            break;
        }
    }
}

function toggleRead(index){
    myLibrary[index].read = !myLibrary[index].read;
}