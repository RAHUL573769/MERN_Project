const express = require("express");
const { PORT } = require("./secret");
const users = require("./models/userModel");
const isLoggedIn = require("./middlewares/isLoggedIn");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(isLoggedIn);

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.body);
  res.status(200).send("Profile is Running");
});
app.get("/users", (req, res) => {
  try {
    res.status(200).send({
      message: "User Found",
      status: "Success",
      users
    });
  } catch (error) {
    res.status(400).json({
      message: "User Not Found",
      status: "Not Success",
      error: error.message
    });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Server is Running");
});
app.listen(PORT, () => {
  console.log("Server is Running at 3000");
});
