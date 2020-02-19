const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const employeeController = require("../controllers/employees.controller");

async function verifyToken(req, res, next){
	console.log(req)
	try {
		if (!req.headers.authorization){
			return res.status(401).send("No auth");
		}

	const token = req.headers.authorization.split(" ")[1];

	if (token === "null"){
		return res.status(401).send("No auth");
	}

	const payload = jwt.verify(token, "secretKey");
	if (!payload) {
			return res.status(401).send('Unauhtorized Request');
	}
	req.userId = payload._id;
	next();
}

	catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
} 

router.get("/", verifyToken, employeeController.getEmployees);
router.get("/:id", verifyToken, employeeController.getEmployee);
router.post("/", verifyToken, employeeController.createEmployee);
router.put("/:id", verifyToken, employeeController.editEmployee);
router.delete("/:id", verifyToken, employeeController.deleteEmployee);

module.exports = router;