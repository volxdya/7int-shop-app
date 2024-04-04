const ShopController = require(`../controllers/shop.controller`);

const Router = require(`express`);
const router = new Router();

router.post(`/create_shop`, ShopController.createShop);
router.get(`/get_all_shops`, ShopController.getAllShops);
router.get(`/get_one_shop`, ShopController.getOneShop);

module.exports = router;