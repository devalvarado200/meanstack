const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);

router.post("/login", usersController.loginUser);
router.post("/signup", usersController.signupUser);
router.put("/:id", usersController.editUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;