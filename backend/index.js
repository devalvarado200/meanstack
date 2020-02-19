const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 4000;
const { mongoose } = require("./database");

const usersRouter = require("./routes/users.routes");
const employeesRouter = require("./routes/employees.routes");

// Settings
app.set("port", process.env.PORT || port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
	origin: "http://localhost:4200"
}));

// Routes
app.use("/users", usersRouter);
app.use("/employees", employeesRouter);

// Starting
app.listen(app.get("port"), () => {
	console.log ("Online on: " + port)
});