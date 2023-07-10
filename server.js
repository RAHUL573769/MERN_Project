const express = require("express");
const { PORT } = require("./secret");
const users = require("./models/userModel");
const isLoggedIn = require("./middlewares/isLoggedIn");
const userRouter = require("./routes/userRouter");
const router = require("./routes/userRouter");
const { connectDb } = require("./config/dbConnect");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(isLoggedIn);

app.use("/user", userRouter);

app.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.body);
  res.status(200).send("Profile is Running");
});

app.get("/", (req, res) => {
  res.status(200).send("Server is Running");
});
app.listen(PORT, async () => {
  console.log("Server is Running at 3000");
  await connectDb();
});
