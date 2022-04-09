const express = require("express");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 6000;

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler); // overwrite default express error handler

app.listen(port, () => console.log(`server started on ${port}`));
