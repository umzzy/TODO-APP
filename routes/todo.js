const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo");

router.get("/", todo.homeController);
router.get("/add-todo", todo.addTodoController);
router.get("/update-todo", todo.updateTodoController);
router.get("/delete-todo", todo.deleteTodoController);
router.post("/add-todo", todo.postAddTodo);
router.post("/update-todo/:id", todo.postUpdateTodo);
router.get("/confirm-delete", todo.deleteTodo);

module.exports = router;
