const Router = require(`express`);
const router = new Router();
const UserController = require(`../controllers/user.controller`);

router.post(`/registration`, UserController.createUser);
router.get(`/get_one_user`, UserController.getUser);
router.get(`/get_all_users`, UserController.getAllUsers);
router.post(`/auth`, UserController.authentication);

module.exports = router;