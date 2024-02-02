import express from "express";

// initialize the router
const booksRouter = express.Router();

booksRouter.route("/").get(getAllBooks).post(createNewBook);
booksRouter
  .route("/:id")
  .get(getBookById)
  .put(updateBookDetails)
  .delete(deleteBook);

export default booksRouter;
