const connectToMongo = require("./db.js");
const express = require("express");

connectToMongo();

const app = express();
const port = 5000;

app.use(express.json());

//Available Routes
/** 
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/login", (req, res) => {
  res.send("Hello Login!");
});

app.get("/api/v1/signup", (req, res) => {
  res.send("Hello Signup!");
});
*/

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});
