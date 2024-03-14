const path = require("path");

const express = require("express");

const todoController = require("../controllers/todo");

const router = express.Router();

router.get("/:todoId", todoController.getItem);
router.get("/", todoController.getList);

router.post("/add", todoController.postAddTodo);

router.post("/:todoId/delete", todoController.deleteTodo);

module.exports = router;
