const PromocodeController = require(`../controllers/promocode.controller`);

const Router = require(`express`);
const router = new Router();


router.post(`/create_promocode`, PromocodeController.createPromocode);
router.post(`/use_promocode`, PromocodeController.usePromocode);
router.get(`/get_all_promocodes`, PromocodeController.getAllPromocodes);
router.get(`/get_promocode_by_input`, PromocodeController.getPromocodeByInput);
router.get(`/get_user_promocodes`, PromocodeController.getUserPromocodes);

module.exports = router;