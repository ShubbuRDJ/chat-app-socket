const { userSetProfileImage, getAllUsers } = require('../controllers/userActionController');
const { verifyUserToken, isLoggedIn } = require('../middlewares/userMiddleware');

const router = require('express').Router();

router.post('/userSetProfileImage',verifyUserToken,isLoggedIn,userSetProfileImage);
router.get('/getAllUsers/:id',verifyUserToken,isLoggedIn,getAllUsers);

module.exports = router;