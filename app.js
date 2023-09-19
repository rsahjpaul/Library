const myLibrary = [
  


];

let bookTitle = document.getElementById("title");

let bookAuthor = document.getElementById("author");

let bookPages = document.getElementById("pages");

let bookRead = document.getElementById("read");

let addBook = document.getElementById("add");

addBook.addEventListener("click", () => {
  let title = bookTitle.value;
  let author = bookAuthor.value;

  let pages = bookPages.value;

  let read = bookRead.value;

  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary)


myLibrary.forEach((book) => {



  console.log(book.title)


});
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;

  this.pages = pages;

  this.read = read;

  this.info = () => {
    return `${title} by ${author}, ${pages} pages, Read: ${read}`;
  };
}

let addBookToLibrary = (title, author, pages, read) => {
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
};



// Book{"The Hobbit by " + "Tolkien " + "295 " + "Yes " }