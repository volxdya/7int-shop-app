const Router = require(`express`);
const router = new Router();
const UserController = require(`../controllers/user.controller`);

router.post(`/create_user`, UserController.createUser);
router.get(`/get_one_user`, UserController.getUser);
router.get(`/get_all_users`, UserController.getAllUsers);

module.exports = router;