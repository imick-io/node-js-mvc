const path = require("path");

const express = require("express");

const todoController = require("../controllers/todo");

const router = express.Router();

router.get("/", todoController.getIndex);

router.post("/add", todoController.postAddTodo);

module.exports = router;
