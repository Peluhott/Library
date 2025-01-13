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