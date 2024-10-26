const Products = require('../../models/productsSchema')
// const CustomError = require('../../utils/customError')

const getAllProducts = async (req, res, next) => {
    const Product = await Products.find()
    // if (!product) {
    //     return next(new CustomError('product not found', 404))
    // }
    res.status(200).json(Product)

}

//get products by category
const productBycategory = async (req, res) => {
    const Product = await Products.find({ category: req.params.category })
    res.json(Product)
}

//get product by ID
const getproductbyID = async (req, res, next) => {
    const oneProduct = await Products.findById(req.params.id)
    // if (!oneProduct) {
    //     return next(new CustomError('product not found', 404))
    // }
    res.json(oneProduct)

}

module.exports = {productBycategory,getproductbyID,getAllProducts}