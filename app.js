const newBookButton = document.querySelector('#new-book');
const closeButton = document.querySelector('#close');
const confirmButton = document.querySelector('#confirm');
const bookDialog = document.querySelector('dialog');
const inputs = document.querySelectorAll('.form-body input');
const form = document.querySelector('form');

const books = document.querySelector('.books');

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
    if(form.checkValidity()){
        addToLibrary(addNewBook(inputs[0].value, inputs[1].value, inputs[2].value));
        bookDialog.children[0].reset();
        bookDialog.close();
    }
    else{
        form.reportValidity();
    }
})


function addToLibrary(book){
    library.push(book);
    showBooks();
}

function addNewBook(title, author, page, isRead){
    return new Book(title, author, page, isRead);
}

function showBooks(){
    while(books.firstChild){
        books.removeChild(books.lastChild);
    }
    library.forEach(element => {
        const title = document.createElement('h3');
        title.textContent = element.title;
        const author = document.createElement('h5');
        author.textContent = element.author;
        const page = document.createElement('p');
        page.textContent = `${element.page} pages`;
        const remove = document.createElement('button');
        remove.textContent = 'X';
        remove.classList.add('remove-book');

        const book = document.createElement('div');
        book.classList.add('book');

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(page);
        book.appendChild(remove);

        books.appendChild(book);

        remove.addEventListener('click', e => {
            removeBook(element);
            showBooks();
        })
    });
}

function removeBook(book) {
    library = library.filter(item => item !== book);

}

addToLibrary(addNewBook('A Tale of Two Cities', 'Charles Dickens', 334));

