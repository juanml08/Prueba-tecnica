const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/booksControllers");

const router = require("express").Router();
router.get("/", async (req, res) => {
  try {
    const books = await getBooks();
    return res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createdBook = await createBook(req.body);
    return res.status(200).send(createdBook);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Error");
  }
});

router.put("/:id", async (req, res) => {
  const bookId = req.params.id;
  console.log("entra put", req.body);
  try {
    const numberUpdatedBooksArray = await updateBook(bookId, req.body);
    return res.status(200).send(numberUpdatedBooksArray);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const numberDeletedBooks = await deleteBook(bookId);
    console.log("numberDeletedBooksArray", numberDeletedBooks);
    return res.status(200).send(numberDeletedBooks.toString());
  } catch (error) {
    console.log("error", error);
    return res.status(500).send("Error");
  }
});

module.exports = router;
