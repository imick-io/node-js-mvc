const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "todos.json"
);

const getTodoFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Todo {
  constructor(title) {
    this.id = (Math.random().toString() * 10000000000).toFixed(0);
    this.title = title;
  }

  save() {
    getTodoFromFile((items) => {
      items.push(this);
      fs.writeFile(p, JSON.stringify(items), (err) => {
        console.log(err);
      });
    });
  }

  static delete(todoId) {
    getTodoFromFile((items) => {
      const updatedItems = items.filter((i) => i.id !== todoId);
      fs.writeFile(p, JSON.stringify(updatedItems), (err) => {
        if (!err) {
          console.log("Deleted todo item");
        }
      });
    });
  }

  static fetchAll(cb) {
    getTodoFromFile(cb);
  }

  static find(id, cb) {
    getTodoFromFile((items) => {
      const item = items.find((i) => i.id === id);
      cb(item);
    });
  }
};
