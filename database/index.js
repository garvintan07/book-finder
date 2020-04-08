const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bookfinder", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let schema = mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  date: String,
  status: String,
  image: String,
});

let Book = mongoose.model("Book", schema);

module.exports = {
  post: (book, callback) => {
    let document = new Book({
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      date: book.date,
      status: "Not Started",
      image: book.image,
    });

    document.save((err) => {
      if (err) {
        callback(err);
      } else {
        callback("success!");
      }
    });
  },
  get: (callback) => {
    Book.find({}, (err, books) => {
      if (err) {
        console.log("error!", err);
      } else {
        callback(books);
      }
    });
  },
};
