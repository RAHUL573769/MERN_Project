const { Mongo_Database } = require("../secret");
const mongoose = require('mongoose');
const express = require("express");
const connectDb = async () => {
  try {
    await mongoose.connect(Mongo_Database);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDb };
