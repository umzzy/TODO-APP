// require express
const express = require("express");

// create an express app
const app = express();
const PORT = 8000;

// set view engine to ejs
app.set("view engine", "ejs");

// Listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
