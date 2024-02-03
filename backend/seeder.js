// this file contain the mock data
import "dotenv/config";
import Book from "./models/books.model.js";
import databaseConnect from "./configs/dbconnect.js";
import books from "./data/books.js";

//connect to the database
databaseConnect();

const importData = async () => {
  try {
    // delete existing data
    await Book.deleteMany();

    // insert Books
    const insertedBooks = await Book.insertMany(books);

    // consoling the success message
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`Data Manipulation ERROR: ${error.message}`);
  }
};

const destroyData = async () => {
  try {
    await Book.deleteMany();

    console.log("Data Removed!");
  } catch (error) {
    console.log(`DATABASE MANIPULATION ERROR:  ${error.message}`);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
