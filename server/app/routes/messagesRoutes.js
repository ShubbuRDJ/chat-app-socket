const { addMessage, getAllMessages } = require('../controllers/messageController');
const { verifyUserToken, isLoggedIn } = require('../middlewares/userMiddleware');

const router = require('express').Router();

router.post('/addMessage',verifyUserToken,isLoggedIn,addMessage);
router.post('/getAllMessages',verifyUserToken,isLoggedIn,getAllMessages);

module.exports = router;