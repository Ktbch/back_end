const Users = require("../../models/UserModel/User");
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");
const getTokenFromHeaders = require("../../utils/getTokenFromHeader");
const appErr = require("../../utils/appErr");

const register = async (req, res, next) => {
  const { firstname, lastname, profilePhoto, email, password } = req.body;
  try {
    const userFound = await Users.findOne({ where: { email } });
    console.log(userFound);

    if (userFound) return next(appErr("User already exit", 505));

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    // create Users
    const user = await Users.create({
      FirstName: firstname,
      LastName: lastname,
      email: email,
      password: hashPassword,
    });

    res.json({
      satus: "success",
      data: user,
    });
  } catch (error) {
    next(appErr(error));
  }
};

const userLoginctrl = async (req, res) => {
  const { Email, password } = req.body;
  try {
    // valiadations
    const userFound = await Users.findOne({ where: { email: Email } });

    if (!userFound)
      return res.json({ errMsg: "User Does Not Exist or Check your Details" });

    const passwordCheck = await bcrypt.compare(password, userFound.password);

    // Verify details
    if (!userFound || !passwordCheck)
      return res.json({ errMsg: "User Does Not Exist or Check your Details" });

    // actions
    res.json({
      status: "success",
      data: {
        firstname: userFound.FirstName,
        lastname: userFound.LastName,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generateToken(userFound.id),
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userProfilectrl = async (req, res) => {
  try {
    // this token makes sure i am loged in its like a ticket or an id card that i can use for some time to have access to the website services after registration
    // secenario i went toplay a game in a station i paid or registered for 02 after my registration i was given a card or token of access to play any game for some limited time then the token expires
    // getTokenFromHeaders(req);

    const user = Users.findByPk(req.auth);
    res.json({
      status: "success",
      data: user.email,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getAllUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "all users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteUsersCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "userDeleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const updateUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "userUpdated",
    });
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = {
  register,
  userLoginctrl,
  userProfilectrl,
  getAllUserCtrl,
  deleteUsersCtrl,
  updateUserCtrl,
};
