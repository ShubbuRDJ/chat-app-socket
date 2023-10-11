const { userSetProfileImage } = require('../controllers/userActionController');
const { verifyUserToken, isLoggedIn } = require('../middlewares/userMiddleware');

const router = require('express').Router();

router.post('/userSetProfileImage',verifyUserToken,isLoggedIn,userSetProfileImage);

module.exports = router;