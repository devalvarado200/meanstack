const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const { mongoose } = require("./database");

const employeeRouter = require("./routes/employee.routes");

// Settings
app.set("port", process.env.PORT || port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/employee", employeeRouter);

// Starting
app.listen(app.get("port"), () => {
	console.log ("Online on: " + port)
});