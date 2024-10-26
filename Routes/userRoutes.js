const express = require("express");
const router = express.Router();
const userController = require('../Controller/User/userController');
const productController=require('../Controller/User/productController')
// const tryCatch = require("../Utils/trycatch");

router
    //user reg,login,logout
    .get('/users',userController.getusers)
    .post('/signup', userController.userReg)
    .post('/login',userController.userLogin)

    //Product View
    .get('/products',productController.getAllProducts)
    .get('/productsby/:id',productController.getproductbyID)
    .get('/products/:category',productController.productBycategory)
    
module.exports = router; 
