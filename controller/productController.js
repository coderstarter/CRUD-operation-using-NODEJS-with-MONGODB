const ProductModel = require('../models/productModels');

exports.getAllProducts = async (req, res) => {
    const products = await ProductModel.find({});
    return res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    return res.status(200).json({productInfo : product});
};

exports.createProduct = async (req, res) => {
    const product = await ProductModel.create(req.body);
    return res.status(201).json({message : 'Product created!!'});
};

exports.updateProduct = async (req, res) => {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({message: 'Resource updated!!'})
}

exports.deleteProduct = async (req, res) => {
    await ProductModel.findByIdAndDelete(req.params.id, req.body);
    return res.status(201).json({message:'Product deleted!!'});
}
