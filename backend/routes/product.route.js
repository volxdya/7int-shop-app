const ProductController = require(`../controllers/product.controller`);

const Router = require(`express`);
const router = new Router();

router.post(`/create_shop`, ProductController.createProduct);

module.exports = router;