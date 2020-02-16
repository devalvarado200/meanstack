const mongoose = require("mongoose");
const URI = "DB";

const CONFIG = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect(URI, CONFIG).then(db => console.log("DB: on")).catch(err => console.log("DB: " + err));

module.exports = mongoose;