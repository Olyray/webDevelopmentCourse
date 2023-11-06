import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { submitted: false });
});

app.post("/submit", (req, res) => {
  const combinedLetters = req.body["fName"] + req.body["lName"];
  const numLetters = combinedLetters.length;
  res.render("index.ejs", {
    numberOfLetters: numLetters,
    submitted: true,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
