const express = require('express');
const router = express.Router();


const loginController = require('../controller/loginController');

router.post('/', loginController.postLogin);
router.get ('/', loginController.getLogin);


module.exports = router;