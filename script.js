


function displayBooks() {
    const libraryContainer = document.querySelector(".library");
    libraryContainer.innerHTML = '';
    myLibrary.forEach((book, index) =>{
        const individualBook = document.createElement('div');
        individualBook.classList.add('bookcontainer');
        
        let bookTitle = document.createElement('p');
        bookTitle.innerText = `Title: ${book.title}`;
        
        let bookAuthor = document.createElement('p');
        bookAuthor.innerText = `Author: ${book.author}`;
        
        let bookCategory = document.createElement('p');
        bookCategory.innerText = `Category: ${book.category}`;
        
        let bookRead = document.createElement('button');
        if(book.read == false){
            bookRead.innerText = "Not Read";
        }
        else {
            bookRead.innerText = "Read"
        }

        bookRead.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete'

        deleteButton.addEventListener ('click', () => {
            myLibrary.splice(index,1);
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




