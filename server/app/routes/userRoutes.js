const { userSetProfileImage } = require('../controllers/userActionController');
const { verifyUserToken } = require('../middlewares/userMiddleware');

const router = require('express').Router();

router.post('/userSetProfileImage',verifyUserToken,userSetProfileImage);

module.exports = router;