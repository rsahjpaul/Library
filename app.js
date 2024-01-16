let bookTitle = document.getElementById("title");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let bookRead = document.getElementById("read");
let addBook = document.getElementById("add");
let addNewBookButton = document.getElementById("new-book");
const addBookModal = document.getElementById("addbookmodal");
let bookSection = document.getElementById("display-book");


// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;

//   this.pages = pages;

//   this.read = read;

  // this.info = () => {
  //   return `${title} by ${author}, ${pages} pages, Read: ${read}`;
  // };
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, Read: ${this.read}`;
  }
};

const myLibrary = [];


let addBookToLibrary = (title, author, pages, read) => {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  displayBook(newBook);
};

let displayBook = (book) => {
  let displayNewBook = document.createElement("div");
  displayNewBook.classList.add("book-card");

  let displayTitle = document.createElement("h3");
  displayTitle.textContent = `${book.title}`;
  displayTitle.classList.add("displayNewBook");

  let displayAuthor = document.createElement("h3");
  displayAuthor.textContent = `${book.author}`;
  displayAuthor.classList.add("displayNewBook");

  let displayPages = document.createElement("h3");
  displayPages.textContent = `${book.pages}`;
  displayPages.classList.add("displayNewBook");

  let displayRead = document.createElement("h3");
  displayRead.textContent = `${book.read}`;
  displayRead.classList.add("displayNewBook");

  displayNewBook.appendChild(displayTitle);
  displayNewBook.appendChild(displayAuthor);
  displayNewBook.appendChild(displayPages);
  displayNewBook.appendChild(displayRead);

  bookSection.appendChild(displayNewBook);
};



addNewBookButton.addEventListener("click", (event) => {
  if (
    addBookModal.style.display === "none" ||
    addBookModal.style.display === ""
  ) {
    addBookModal.style.display = "flex";

    bookTitle.value = "";
    bookAuthor.value = "";

    bookRead.value = "";

    bookPages.value = "";
  } else {
    addBookModal.style.display = "none";
  }
});

addBook.addEventListener("click", (event) => {
  event.preventDefault();

  let title = bookTitle.value;
  let author = bookAuthor.value;

  let pages = bookPages.value;

  let read = bookRead.value;

  if (title !== "" && author !== "" && pages !== "" && read !== "") {
    addBookToLibrary(title, author, pages, read);
  }

  myLibrary.forEach((book) => {
    console.log(book.title);
  });

  addBookModal.style.display = "none";
});

// let addBookToLibrary = (title, author, pages, read) => {
//   let newBook = new Book(title, author, pages, read);
//   myLibrary.push(newBook);

//   let displayNewBook = document.createElement("div");
//   displayNewBook.classList.add("book-card");

//   let displayTitle = document.createElement("h3");
//   displayTitle.textContent = `${title}`;
//   displayTitle.classList.add("displayNewBook");

//   let displayAuthor = document.createElement("h3");
//   displayAuthor.textContent = `${author}`;
//   displayAuthor.classList.add("displayNewBook");

//   let displayPages = document.createElement("h3");
//   displayPages.textContent = `${pages}`;
//   displayPages.classList.add("displayNewBook");

//   let displayRead = document.createElement("h3");
//   displayRead.textContent = `${read}`;
//   displayRead.classList.add("displayNewBook");

//   displayNewBook.appendChild(displayTitle);
//   displayNewBook.appendChild(displayAuthor);
//   displayNewBook.appendChild(displayPages);
//   displayNewBook.appendChild(displayRead);

//   bookSection.appendChild(displayNewBook);
// };
