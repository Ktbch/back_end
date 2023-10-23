const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConnect");
// require("../../config/dbConnect");

const Users = sequelize.define(
  "users",
  {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: [true, "Firstname is required"],
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: [true, "LastName"],
    },
    email: {
      type: DataTypes.STRING,
      required: [true, "email is required"],
    },
    profiolPhoto: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      required: [true, "Password is required"],
    },
    postCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["Admin", "Guest", "Editor"],
    },
    viewedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    followers: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    followedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      default: true,
    },
    posts: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  { timeStamp: true }
);

module.exports = Users;

// sequelize
//   .sync()
//   .then(() => {
//     console.log(User);
//   })
//   .catch((error) => {
//     console.error("Unable to create table : ", error);
//   });
