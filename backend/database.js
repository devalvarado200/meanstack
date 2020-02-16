const mongoose = require("mongoose");
const URI = "mongodb+srv://victoraav2017:sudor00t@cluster0-nfhak.mongodb.net/test?retryWrites=true&w=majority";

const CONFIG = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect(URI, CONFIG).then(db => console.log("DB: on")).catch(err => console.log("DB: " + err));

module.exports = mongoose;