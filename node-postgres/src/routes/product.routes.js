const router = require('express-promise-router') (); 
const productController = require ('../controllers/product.controller'); 

// ==> Definiendo las rutas de CRUD - 'Product': 
router.post('/products', productController.createProduct); 
router.get('/products', productController.listAllProducts);


module.exports = router;