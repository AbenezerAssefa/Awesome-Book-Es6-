export default class Books {
  constructor() {
    this.books = [];
  }

  addBook = (book) => {
    this.books.push(book);
    this.saveBooks();
    this.renderBooks();
  }

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== Number(id));
    this.saveBooks();
    this.renderBooks();
    let count = Number(localStorage.getItem('count'));
    count -= 1;
    localStorage.setItem('count', count);
  }

  saveBooks = () => {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getbooks = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      this.books = JSON.parse(savedBooks);
    } else {
      this.books = [];
    }
  }

  renderBooks = () => {
    const bookList = document.getElementById('books-list');
    bookList.innerHTML = '';

    this.books.forEach((book) => {
      const li = document.createElement('li');
      li.classList.add('book-item');

      const p = document.createElement('p');
      p.innerHTML = `${book.title} by ${book.author}`;

      const btn = document.createElement('button');
      btn.classList.add('remove-btn');
      btn.innerHTML = 'Remove';

      btn.addEventListener('click', () => {
        this.removeBook(book.id);
      });

      li.appendChild(p);
      li.appendChild(btn);
      bookList.appendChild(li);
    });
  }
}