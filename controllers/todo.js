const Todo = require("../models/todo");

exports.getList = (req, res, next) => {
  Todo.fetchAll((list) => {
    res.render("todo/list", {
      list: list,
      pageTitle: "To Dos",
      path: "/",
    });
  });
};

exports.getItem = (req, res, next) => {
  const todoIt = req.params.todoId;
  Todo.find(todoIt, (item) => {
    res.render("todo/item", {
      item: item,
      pageTitle: item.title,
      path: "/",
    });
  });
};

exports.postAddTodo = (req, res, next) => {
  const title = req.body.title;
  const item = new Todo(title);
  item.save();
  res.redirect("/todos");
};

exports.deleteTodo = (req, res, next) => {
  const todoIt = req.params.todoId;
  Todo.delete(todoIt);
  res.redirect("/todos");
};
