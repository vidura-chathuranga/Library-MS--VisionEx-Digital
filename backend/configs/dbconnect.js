import mongoose, { connect } from "mongoose";

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log("Database synced");
  } catch (error) {
    console.log("DB_ERROR:", error.message);
  }
};

export default databaseConnect;
