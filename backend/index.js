import path from "path";
import express from "express";
import "dotenv/config";
import cors from "cors";
import databaseConnect from "./configs/dbconnect.js";
import BookRoutes from "./routes/books.routes.js";
import UploadRoutes from "./routes/upload.routes.js";

// create express instance
const app = express();

// connect with the database
databaseConnect();

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

// upload routes
app.use("/api/uploads", UploadRoutes);

const __dirname = path.resolve(""); //set __dirname to root directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Lib Management system API is responsing...");
  });
}
// Start the server
app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});
