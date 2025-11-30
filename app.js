// require modules
const express = require("express");
const path = require("path");
const { title } = require("process");
const bodyParser = require("body-parser");
const connectMongoDB = require("./init/mongodb");
const todoRouter = require("./routes/todo");
const dotenv = require("dotenv");

// configure dotenv
dotenv.config();

// create an express app
const app = express();
// Connect to MongoDB connection
connectMongoDB();

// set view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRouter);

module.exports = app;
