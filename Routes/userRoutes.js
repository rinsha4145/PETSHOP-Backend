const express = require("express");
const router = express.Router();
const userController = require('../Controller/User/userController');
const tryCatch = require("../Utils/trycatch");

router
.post('/signup', userController.userReg)
// .post('/user/login')

// .post('/user/login',tryCatch(userController.userlogin))
// .post('/user/logout',tryCatch(userController.userLogout))

module.exports = router; 
