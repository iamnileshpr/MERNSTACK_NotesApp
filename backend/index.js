let express = require("express");
const connectDB = require("./config/dBconnection");
let app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB();

app.get("/health", function(req, res) {
    res.send('ok')
})

app.use("/api/note", require('./routes/notes.routes'))

app.listen(3000, function() {
    console.log("server chalu hogaya");
})