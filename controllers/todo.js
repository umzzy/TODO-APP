const moment = require("moment");
const todoDb = require("../models/Todo");

const homeController = async (req, res, next) => {
  try {
    const todos = await todoDb.find({}).sort({ createdAt: -1 });

    res.locals.moment = moment;

    res.render("index", { title: "Home", todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTodoController = (req, res, next) => {
  try {
    res.render("newTodo", { title: "Create Todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const todo = await todoDb.findById(id);
    res.render("updateTodo", { title: "Update Todo", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoController = (req, res, next) => {
  try {
    const { id } = req.query;

    res.render("deleteTodo", { title: "Delete Todo", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postAddTodo = async (req, res, next) => {
  try {
    const { title, desc } = req.body;
    const newTodo = new todoDb({ title, desc });
    await newTodo.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postUpdateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;

    const todo = await todoDb.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.title = title;
    todo.desc = desc;
    await todo.save();

    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const { id, confirm } = req.query;
    if (confirm === "yes") {
      await todoDb.findByIdAndDelete(id);
    }
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  homeController,
  addTodoController,
  updateTodoController,
  deleteTodoController,
  postAddTodo,
  postUpdateTodo,
  deleteTodo,
};
