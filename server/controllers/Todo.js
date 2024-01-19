const Todo = require("./../models/Todo");

exports.getTodos = async (req, res) => {
  const id = req.user.id;
  const todos = await Todo.find({ userId: id });
  res.send(todos);
};

exports.addTodo = async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const id = req.user.id;
  const title = req.body.title;
  const todo = new Todo({
    title: title,
    userId: id,
  });
  await todo.save();
  res.json(todo);
};

exports.deletedTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findByIdAndDelete(id);
  if (todo) res.send(todo);
  else res.sendStatus(404);
};

exports.clearHolder = async (req, res) => {
  try {
    const id = req.user.id;
    const todo = await Todo.deleteMany({ userId: id });
    if (todo.deletedCount > 0) {
      res.send(todo);
    } else {
      res.status(200).send({ message: "No todos found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.clearComplited = async (req, res) => {
  try {
    const id = req.user.id;
    const todo = await Todo.deleteMany({ done: true, userId: id });
    if (todo.deletedCount > 0) {
      res.send(todo);
    } else {
      res.status(200).send({ message: "No todos found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.selectTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    todo.done = !todo.done;
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.sendStatus(500);
  }
};

exports.allSelectTodo = async (req, res) => {
  try {
    const id = req.user.id;
    const todos = await Todo.find({ userId: id });
    const allValid = todos.every((todo) => todo.done);

    const updateTodo = await Todo.updateMany({userId: id}, { done: !allValid });
    res.send(updateTodo);
  } catch (error) {
    res.sendStatus(500);
  }
};

exports.editTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    const title = req.body.title;
    todo.title = title;
    await todo.save();
    res.send(todo);
  } catch (error) {
    res.sendStatus(500);
  }
};
