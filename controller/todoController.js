// In todo controllere we are going to save how our data is going to save in mongodb...
const TodoModel = require("../models/todoModels");

module.exports.getTodo = async (req, res) => {
  const todo = await TodoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  // Fetch all existing todos from the database
  TodoModel.find()
    .then((existingTodos) => {
      // Create a new todo
      return TodoModel.create({ text }).then((newTodo) => {
        // Concatenate the new todo with the existing todos
        const updatedTodos = [...existingTodos, newTodo];
        // Send back the updated list of todos
        res.send(updatedTodos);
      });
    })
    .catch((error) => {
      console.error("Error while saving todo:", error);
      res.status(500).send("Error while saving todo");
    });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  TodoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send("updated sucessfully..."))
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteTodo = async (req, res) => {
  const { _id } = req.body;
  TodoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted sucessfully..."))
    .catch((err) => {
      console.log(err);
    });
};
