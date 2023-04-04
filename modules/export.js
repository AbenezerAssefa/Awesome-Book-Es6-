export default class Book {
  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}