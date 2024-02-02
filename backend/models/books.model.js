import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    ISBN: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    tags: [String],
    numOfPages: {
      type: Number,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    availableStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const book = mongoose.model("book", bookSchema);

export default book;
