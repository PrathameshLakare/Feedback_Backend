const mongoose = require("mongoose");

const mongoURI = process.env.MONGOURI;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoURI);

    if (connection) {
      console.log("Connected successfully.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = { initializeDatabase };
