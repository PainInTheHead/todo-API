const express = require("express")
const todoController = require("./../controllers/Todo")
const router = express.Router()
const passport = require("passport");
require("./../midleware/passport")(passport);

const Authenticate = passport.authenticate("jwt", { session: false })

router.get("/todo", Authenticate, todoController.getTodos)
router.post("/todo", Authenticate, todoController.addTodo)
router.delete("/todo/:id", todoController.deletedTodo)
router.delete("/clearholder", Authenticate, todoController.clearHolder)
router.delete("/clearComplited", Authenticate, todoController.clearComplited)
router.put("/todo/:id", todoController.selectTodo)
router.put("/allselected", Authenticate, todoController.allSelectTodo)
router.put("/edit/:id", todoController.editTodo)

module.exports = router

