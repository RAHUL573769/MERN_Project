const express = require("express");
const { PORT } = require("./secret");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  }

  console.log("Is User Logged");
  next();
};

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.body);
  res.status(200).send("Profile is Running");
});
app.get("/", (req, res) => {
  res.status(200).send("Server is Running");
});
app.listen(PORT, () => {
  console.log("Server is Running at 3000");
});
