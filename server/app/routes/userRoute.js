const { userRegister, userLogin } = require('../controllers/userController');
const { isEmailExists, isUserNameExists, isValidUserName } = require('../middlewares/userMiddleware');

const router = require('express').Router();

router.post('/userRegister',isUserNameExists,isEmailExists,userRegister);
router.post('/userLogin',isValidUserName,userLogin);

module.exports = router;