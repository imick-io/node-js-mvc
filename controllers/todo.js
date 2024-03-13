const Todo = require("../models/todo");

exports.getIndex = (req, res, next) => {
  Todo.fetchAll((list) => {
    res.render("todo/index", {
      list: list,
      pageTitle: "To Dos",
      path: "/",
    });
  });
};

exports.postAddTodo = (req, res, next) => {
  const title = req.body.title;
  const item = new Todo(title);
  item.save();
  res.redirect("/");
};
