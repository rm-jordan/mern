const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 6000;

const app = express();

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get the goals!" });
});

app.listen(port, () => console.log(`server started on ${port}`));
