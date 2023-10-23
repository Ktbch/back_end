const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConnect");
require("../../config/dbConnect");

const Post = sequelize.define(
  "categories",
  {
    posts: {
      type: DataTypes.INTEGER,
      reference: {
        model: "Users",
        key: "id",
        required: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      required: true,
    },
  },
  { timeStampt: true }
);
