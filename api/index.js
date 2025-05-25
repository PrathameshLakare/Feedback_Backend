require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const { initializeDatabase } = require("./db/db.connect");
const Feedback = require("./models/feedback");

app.use(express.json());
app.use(cors());

initializeDatabase();

// POST /feedback: To receive and store feedback in a simple database.
app.post("/v1/feedback", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const feedback = new Feedback({ name, email, message });
    const savedFeedback = await feedback.save();

    res.status(201).json({
      message: "Feedback saved successfully.",
      feedback: savedFeedback,
    });
  } catch (error) {
    res.status(500).json("Internal server error.");
  }
});

// GET /feedback: To retrieve and display all submitted feedback.
app.get("/v1/feedback", async (req, res) => {
  try {
    const allFeedback = await Feedback.find();

    res
      .status(200)
      .json({ message: "Feedback fetch successfull.", feedback: allFeedback });
  } catch (error) {
    res.status(500).json("Internal server error.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
