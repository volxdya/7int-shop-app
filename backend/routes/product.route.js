const ProductController = require(`../controllers/product.controller`);

const Router = require(`express`);
const router = new Router();

router.post(`/create_product`, ProductController.createProduct);
router.get(`/get_all_products`, ProductController.getAllProducts);
router.get(`/get_one_product`, ProductController.getOneProduct);

module.exports = router;