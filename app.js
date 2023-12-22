const newBookButton = document.querySelector('#new-book');
const closeButton = document.querySelector('#close');
const bookDialog = document.querySelector('dialog');

newBookButton.addEventListener('click', (event)=> {
    event.preventDefault();
    bookDialog.showModal();
})

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
})

class Book {
    constructor(title, author, page, isRead){
        this.title = title;
        this.author = author;
        this.page = page;
        this.isRead = isRead;
    }
}

let books = [];

function addToLibrary(book){
    books.push(book);
}

function addNewBook(title, author, page, isRead){
    return new Book(title, author, page, isRead);
}