const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConnect");
require("../../config/dbConnect");

const Post = sequelize.define(
  "comments",
  {
    posts: {
      type: DataTypes.INTEGER,
      reference: {
        model: "Posts",
        key: "id",
        required: [true, "Post is required is required"],
      },
    },
    User: {
      type: DataTypes.JSON,
      required: [true, "User is required is required"],
    },
    description: {
      type: DataTypes.STRING,
      required: [true, "USer is comments Description"],
    },
  },
  { timeStampt: true }
);
