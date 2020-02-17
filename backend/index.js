const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;
const { mongoose } = require("./database");

const employeeRouter = require("./routes/employee.routes");
const userRouter = require("./routes/user.routes");

// Settings
app.set("port", process.env.PORT || port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
	origin: "http://localhost:4200"
}));
// Routes
app.use("/employee", employeeRouter);
app.use("/user", userRouter);

// Starting
app.listen(app.get("port"), () => {
	console.log ("Online on: " + port)
});