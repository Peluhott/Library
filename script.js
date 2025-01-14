
const libraryContainer = document.querySelector(".library");

function displayBooks() {
    const libraryContainer = document.querySelector(".library");
    libraryContainer.innerHTML = '';
    libraryContainer.forEach((book, index) =>{
        const individualBook = document.createElement('div');
        individualBook.classList.add('bookcontainer');
        
        let bookTitle = document.createElement('p');
        bookTitle.innerText = `Title: ${book.title}`;
        
        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = book.author;
        
        let bookCategory = document.createElement('p');
        bookCategory.innerText = book.category;
        
        let bookRead = document.createElement('button');
        if(book.read == false){
            bookRead.innerText = "No";
        }
        else {
            bookRead.innerText = "Yes"
        }

        bookRead.addEventListener('click', () => {
            book.read = !book.read;
        });

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete'

        deleteButton.addEventListener ('click', () => {
            myLibrary.splice(i,1);
            displayBooks();
        });

        individualBook.appendChild(bookTitle);
        individualBook.appendChild(bookAuthor);
        individualBook.appendChild(bookCategory);
        individualBook.appendChild(bookRead);
        individualBook.appendChild(deleteButton);
        libraryContainer.appendChild(individualBook);
    });
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

addBookToLibrary('No Bad Parts','Richard Scwhartz','Psychology',false);
displayBooks();




