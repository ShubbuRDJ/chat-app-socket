const { User } = require("../model");
const jwt = require("jsonwebtoken");
const { responseData } = require("../utils/responseData/responseData");

module.exports.isEmailExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    const isEmail = await User.exists({ email });
    if (isEmail) {
      return res
        .status(400)
        .send(
          responseData.failure(
            "Sorry, the email address you provided is already registered."
          )
        );
    } else {
      return next();
    }
  } catch (error) {
    return res
      .status(500)
      .send(responseData.failure("Internal server error", 500));
  }
};

module.exports.isUserNameExists = async (req, res, next) => {
  const { userName } = req.body;
  try {
    const isUserName = await User.exists({ userName });
    if (isUserName) {
      return res
        .status(400)
        .send(
          responseData.failure(
            "Sorry, userName you provided is already registered."
          )
        );
    } else {
      return next();
    }
  } catch (error) {
    return res
      .status(500)
      .send(responseData.failure("Internal server error", 500));
  }
};

module.exports.isValidUserName = async (req, res, next) => {
  const { userName } = req.body;
  try {
    const isUserName = await User.exists({ userName });
    if (!isUserName) {
      return res
        .status(400)
        .send(responseData.failure("Sorry, userName not found."));
    } else {
      return next();
    }
  } catch (error) {
    return res
      .status(500)
      .send(responseData.failure("Internal server error", 500));
  }
};

module.exports.verifyUserToken = async (req, res, next) => {
  const authToken = req.headers["authorization"];
  console.log(authToken, "verifyToken auth token");
  try {
    if (!authToken) {
      return res
        .status(401)
        .send(responseData.failure("Authorization Token Missing.", 401));
    }

    jwt.verify(authToken, process.env.JWT_SIGNATURE, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .send(responseData.failure("Invalid token.", 401));
      }
      req.user = decoded.id;
      return next();
    });
  } catch (error) {
    return res.status(500).send(responseData.failure(error.message, 500));
  }
};

module.exports.isLoggedIn = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const isLog = await User.exists({ _id: req.user, session: authorization });
    if (!isLog) {
      return res
        .status(401)
        .send(
          responseData.failure(
            "Oops! It seems you're not logged in: Please sign in to access this resource",
            401
          )
        );
    } else {
      next();
    }
  } catch (error) {
    return res
      .status(500)
      .send(responseData.failure("Internal server error!", 500));
  }
};
