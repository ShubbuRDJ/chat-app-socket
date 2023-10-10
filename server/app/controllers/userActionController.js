const { User } = require("../model");
const { updateById } = require("../services/common");
const { responseData } = require("../utils/responseData/responseData");

module.exports.userSetProfileImage = async (req, res) => {
  try {
    const { avatarImage } = req.body;
    const payload = { avatarImage,isAvatarImage:avatarImage?true:false };
    const setProfileImageResponse = await updateById(User,req.user.id,payload);
    if(setProfileImageResponse){
        return res
      .status(201)
      .send(
        responseData.success(
          userCreated,
          "Congratulations! Your registration was successful",
          201
        )
      );
    }
    else{
        return res
      .status(400)
      .send(
        responseData.failure(
          "Congratulations! Your registration was successful",
          400
        )
      );
    }
  } catch (error) {
    return res.status(500).send(responseData.failure(error.message, 500));
  }
};
