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
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  save() {
    getTodoFromFile((items) => {
      items.push(this);
      fs.writeFile(p, JSON.stringify(items), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getTodoFromFile(cb);
  }
};
