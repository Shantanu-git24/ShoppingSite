const express= require('express');

const router = express.Router();

const productController =  require('../controllers/productController');

router.post('/products',productController.create_Product);

router.get('/products',productController.products);

router.get('/products/:id',productController.product);

router.post('/products/:id',productController.update_product);

router.delete('/products/:id',productController.delete_product);


module.exports=router;