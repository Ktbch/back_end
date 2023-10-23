const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "blogapi", // Database name
  "ibk", // Database username
  "X.5S!ZbeSy18*9VM", // Database password
  {
    host: "localhost", // Database host
    dialect: "mysql", // Database dialect (MySQL in this case)
  }
);
module.exports = sequelize;
require("../models");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

sequelize
  .sync()
  .then(() => {
    // console.log(User);d
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
