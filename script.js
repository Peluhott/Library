


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

const dialog = document.getElementById('myDialog');
const openButton = document.querySelector('.book-form');
const closeButton = document.getElementById('closeBtn');
const userForm = document.getElementById('userForm');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    const read = document.getElementById('read').value;
   
    if (read == 'yes'){
        let readOrNot = true;
        addBookToLibrary(title, author, category, readOrNot);
        displayBooks();
    }
    else if(read == 'no'){
        let readOrNot = false;
        addBookToLibrary(title, author, category, readOrNot);
        displayBooks();
    }
    userForm.reset();
    dialog.close();
})

addBookToLibrary('No Bad Parts','Richard Scwhartz','Psychology',false);
displayBooks();




