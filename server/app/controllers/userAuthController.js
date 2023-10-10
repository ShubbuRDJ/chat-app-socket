const { User } = require("../model");
const bcrypt = require("bcrypt");
const { create } = require("../services/common");
const { responseData } = require("../utils/responseData/responseData");
const jwt = require('jsonwebtoken');

module.exports.userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const payload = { userName, email, password: hashedPassword };
    let userCreated = await create(User, payload);
    delete userCreated._doc.password;
    return res
      .status(201)
      .send(
        responseData.success(
          userCreated,
          "Congratulations! Your registration was successful",
          201
        )
      );
  } catch (error) {
    return res.status(500).send(responseData.failure(error.message, 500));
  }
};

module.exports.userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const {JWT_SIGNATURE,TOKEN_EXPIRES_IN} = process.env;
    const user = await User.findOne({ userName }).lean();
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      const token  = jwt.sign({id:user._id,email:user.email}, JWT_SIGNATURE, { expiresIn:TOKEN_EXPIRES_IN });
      return res
        .status(200)
        .send(
          responseData.success(
            {token,userId:user._id},
            "Login Successful!",
            200
          )
        );
    }
  } catch (error) {
    return res.status(500).send(responseData.failure(error.message, 500));
  }
};
