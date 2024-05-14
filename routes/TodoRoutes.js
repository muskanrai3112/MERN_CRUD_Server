const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");
const { SignUp, Login } = require("../controller/UserControllers");

const router = Router();
router.get("/", getTodo);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);
router.post("/signUp", SignUp);
router.post("/login", Login);
module.exports = router;
