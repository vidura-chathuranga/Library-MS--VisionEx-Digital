import Book from "../models/books.model.js";

// @desc  get all existing books
// @route GET /api/books/
// @access public
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    // send all the book details
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc  get book by its id
// @route GET /api/books/:id
// @access public
const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const bookDetails = await Book.findById(id);

    if (bookDetails) {
      res.status(200).json(bookDetails);
    } else {
      throw new Error("Resource not found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc  create new book
// @route POST /api/books/
// @access public
const createNewBook = async (req, res) => {
  const {
    ISBN,
    title,
    author,
    publicationYear,
    image,
    numOfPages,
    location,
    language,
    description,
  } = req.body;

  if (
    !ISBN ||
    !title ||
    !author ||
    !publicationYear ||
    !image ||
    !numOfPages ||
    !location ||
    !language ||
    !description
  ) {
    throw new Error("All fields are required");
  }
  try {
    const newBook = await Book.create({
      ISBN,
      title,
      author,
      publicationYear,
      image,
      numOfPages,
      location,
      language,
      description,
      availableStatus: true,
    });

    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

// @desc  Update existing book details
// @route PUT /api/books/:id
// @access public
const updateBookDetails = async (req, res) => {
  const {
    ISBN,
    title,
    author,
    publicationYear,
    image,
    numOfPages,
    location,
    language,
    description,
    bookId,
  } = req.body;

  try {
    const editedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        ISBN,
        title,
        author,
        publicationYear,
        image,
        numOfPages,
        location,
        language,
        description,
      },
      { new: true }
    );

    if (editedBook) {
      res
        .status(200)
        .json({ message: `${editedBook.title} updated sucessfully` });
    } else {
      throw new Error("Book not found");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// @desc  delete existing book
// @route DELETE /api/books/:id
// @access public
const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (deletedBook) {
      res.status(200).json({ message: "Book deleted successfully" });
    } else {
      throw new Error("Resource not found");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookDetails,
  deleteBook,
};
