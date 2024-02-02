import express from "express";
import "dotenv/config";
import cors from "cors";
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

// default api path
app.get("/api", (req, res) => {
  res.send("Library management system API");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});
