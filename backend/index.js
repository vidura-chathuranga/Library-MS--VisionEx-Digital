import express from "express";
import "dotenv/config";
import cors from "cors";
import BookRoutes from "./routes/books.routes.js";
const app = express();

// initialize the server port
const PORT = process.env.PORT || 9000;

// initialize the cors middleware
app.use(cors());

// accept json
app.use(express.json());

// loggin every request
app.use((req, res, next) => {
  console.log(`${req.method} ====> ${req.url}`);
  next();
});

// books routes
app.use("/api/books", BookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});
