const appErr = require("../utils/appErr");
const getTokenFromHeaders = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeaders(req);
  const decoded = verifyToken(token);
  if (!decoded)
    return next(appErr('invalidToken', 505));
  req.auth = decoded.id;
  next();
};

module.exports = isLogin;
