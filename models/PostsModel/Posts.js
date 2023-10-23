const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConnect");
require("../../config/dbConnect");

const Post = sequelize.define(
  "posts",
  {
    title: {
      type: DataTypes.STRING,
      required: [true, "Post Title is required"],
      trim: true,
    },
    description: {
      type: DataTypes.STRING,
      required: [true, "Post Title is required"],
    },
    numViews: {
      type: DataTypes.INTEGER,
      reference: {
        model: "User",
        key: "id",
      },
    },
    Likes: {
      type: DataTypes.INTEGER,
      reference: {
        model: "User",
        key: "id",
      },
    },
    disLikes: {
      type: DataTypes.INTEGER,
      reference: {
        model: "User",
        key: "id",
      },
    },
    user: {
      type: DataTypes.INTEGER,
      reference: {
        model: "User",
        key: "id",
      },
      required: [true, "please Author is required"],
    },
    photo: {
      type: DataTypes.STRING,
      required: [true, "please photos is required"],
    },
  },
  { timeStampt: true }
);
