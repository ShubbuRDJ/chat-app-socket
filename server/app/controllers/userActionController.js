const { User } = require("../model");
const { updateById } = require("../services/common");
const { responseData } = require("../utils/responseData/responseData");

module.exports.userSetProfileImage = async (req, res) => {
  try {
    const { avatarImage } = req.body;
    const payload = { avatarImage, isAvatarImage: avatarImage ? true : false };
    const setProfileImageResponse = await updateById(User, req.user, payload);
    if (setProfileImageResponse) {
      delete setProfileImageResponse._doc.password;
      delete setProfileImageResponse._doc.session;
      return res
        .status(200)
        .send(
          responseData.success(
            setProfileImageResponse,
            "Congratulations! Your profile image has been updated successfully.",
            200
          )
        );
    } else {
      return res.status(400).send(responseData.failure("Something went wrong.", 400));
    }
  } catch (error) {
    return res.status(500).send(responseData.failure("Internal server error!", 500));
  }
};
