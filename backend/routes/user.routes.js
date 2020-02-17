const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);

router.post("/login", userController.loginUser);
router.post("/signup", userController.signupUser);
router.put("/:id", userController.editUser);
router.delete("/:id", userController.deleteUser);


module.exports = router;