import Book from '../models/books.model.js';

// @desc  get all existing books
// @route GET /api/books/
// @access public
const getAllBooks = async (req, res) => {
  try{
    const books = await Book.find({});

    // send all the book details
    res.status(200).json(books);
  }catch(error){
    res.status(500).json(error.message);
  }
};

// @desc  get book by its id
// @route GET /api/books/:id
// @access public
const getBookById = async (req, res) => {
  console.log("get book by Id");
};

// @desc  create new book
// @route POST /api/books/
// @access public
const createNewBook = async (req, res) => {
  console.log("create new book");
};

// @desc  Update existing book details
// @route PUT /api/books/:id
// @access public
const updateBookDetails = async (req, res) => {
  console.log("update book details");
};

// @desc  delete existing book
// @route DELETE /api/books/:id
// @access public
const deleteBook = async (req, res) => {
  console.log("Delete book details");
};

export {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBookDetails,
  deleteBook,
};
