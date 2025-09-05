const express = require('express');
const router = express.Router();

const {validateLogin, checkLoginCredentials} = require('../../middleware/authMiddlewares/validateLogin');
const {validateRegisteration} = require('../../middleware/authMiddlewares/validateRegisteration');
const {loginUser, registerUser} = require('../../controllers/authControllers/authControllers');



router.post('/login', validateLogin, checkLoginCredentials ,loginUser);

router.post('/registeration', validateRegisteration , registerUser);

module.exports = router;