require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const Mongo_Database = process.env.Mongodb_Url;
module.exports = { PORT, Mongo_Database };
