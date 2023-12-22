const newBookButton = document.querySelector('#new-book');
const closeButton = document.querySelector('#close');
const confirmButton = document.querySelector('#confirm');
const bookDialog = document.querySelector('dialog');
const inputs = document.querySelectorAll('.form-body input');

let library = [];

class Book {
    constructor(title, author, page, isRead){
        this.title = title;
        this.author = author;
        this.page = page;
        this.isRead = isRead;
    }
}

newBookButton.addEventListener('click', (event)=> {
    event.preventDefault();
    bookDialog.showModal();
})

closeButton.addEventListener('click', (event) => {
    event.preventDefault();
    bookDialog.close()
})

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    addToLibrary(new Book(inputs[0].value, inputs[1].value, inputs[2].value));
    bookDialog.children[0].reset();
    bookDialog.close();
})


function addToLibrary(book){
    library.push(book);
}

function addNewBook(title, author, page, isRead){
    return new Book(title, author, page, isRead);
}