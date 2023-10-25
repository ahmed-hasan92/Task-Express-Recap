const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addNewBook,
  deletBook,
  getOneBook,
  updateBook,
} = require("./books.controllers");

router.get("/books", getAllBooks);
router.get("/books/:id", getOneBook);
router.post("/books", addNewBook);
router.delete("/books/:id", deletBook);
router.put("/books/:id", updateBook);

module.exports = router;
