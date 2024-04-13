const ShopController = require(`../controllers/shop.controller`);

const Router = require(`express`);
const router = new Router();

router.post(`/create_shop`, ShopController.createShop);
router.get(`/get_all_shops`, ShopController.getAllShops);
router.put(`/update_shop`, ShopController.updateShop);
router.get(`/get_one_shop`, ShopController.getOneShop);
router.get(`/delete_shop`, ShopController.deleteShop);
router.get(`/get_user_shops`, ShopController.getUserShops);

module.exports = router;