const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 6000;

connectDB();

const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); // overwrite default express error handler

app.listen(port, () => console.log(`server started on ${port}`));
