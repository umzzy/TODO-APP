const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: String,
  },
  { timestamps: true }
);

const todoDb = mongoose.model("todo", todoSchema);

module.exports = todoDb;
