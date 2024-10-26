const express = require("express");
const router = express.Router();
const userController = require('../Controller/User/userController');
const tryCatch = require("../Utils/trycatch");

router
    //user reg,login,logout
    .post('/signup', userController.userReg)
    // .post('/user/login')

    //Product View
    .get('/products',getAllProducts)
    .get('/productsby/:id',getProductsId)
    .get('/products/:category', getProductsCategory)

    
module.exports = router; 
