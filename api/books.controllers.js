const books = require("../model/Books");

const getAllBooks = async (req, res) => {
  try {
    const getBooks = await books.find();

    res.status(200).json(getBooks);
  } catch {
    res.status(500).json({ message: "Something is wrong" });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBook = await books.create(req.body);

    res.status(201).json(newBook);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the a new book" });
  }
};

const deletBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const foundBook = await books.findById(bookId);

    if (foundBook) {
      await foundBook.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "This book doesn't exist" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book" });
  }
};

const getOneBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const findOne = await books.findById({ _id: bookId });
    if (findOne) {
      await res.status(200).json(findOne);
    } else {
      await res.status(404).json({ message: "book isn't exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const foundBook = await books.findById(bookId);

    if (foundBook) {
      await books.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ error: "This book has been updated" });
    }
  } catch {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { getAllBooks, addNewBook, deletBook, getOneBook, updateBook };
