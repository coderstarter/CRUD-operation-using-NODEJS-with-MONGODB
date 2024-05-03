const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

// Routes have logic and logic should be under the controllers 

// app.post('/api/products', async (req, res) => {
//     const body = req.body;
//     const product = await ProductModel.create({
//         product_name: body.product_name,
//         product_price: body.product_price,
//         isInStock: body.isInStock,
//         category: body.category
//     });
//     console.log(product);
//     res.status(201).json({message : 'Product created'});
// })

router.post('/api/products', productController.createProduct)

router.get('/api/products',productController.getAllProducts)


router.get('/api/products/:id', productController.getProductById)

router.put('/api/products/:id', productController.updateProduct)

router.delete('/api/products/:id', productController.deleteProduct)

module.exports = router;