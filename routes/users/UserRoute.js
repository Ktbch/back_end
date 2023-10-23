const express = require("express");
const {
  register,
  userLoginctrl,
  userProfilectrl,
  getAllUserCtrl,
  deleteUsersCtrl,
  updateUserCtrl,
} = require("../../controllers/UserController/userController");
const isLogin = require("../../middleware/isLogin");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post("/login", userLoginctrl);

userRouter.get("/profile/", isLogin, userProfilectrl);

userRouter.get("/", getAllUserCtrl);

userRouter.delete("/:id", deleteUsersCtrl);

userRouter.put("/:id", updateUserCtrl);

module.exports = userRouter;
