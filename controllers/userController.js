const users = require("../models/userModel");
const getUserController = (req, res) => {
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
};
module.exports = { getUserController };
