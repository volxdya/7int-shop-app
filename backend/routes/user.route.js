const Router = require(`express`);
const router = new Router();
const UserController = require(`../controllers/user.controller`);

router.post(`/registration`, UserController.createUser);
router.get(`/get_one_user`, UserController.getUser);
router.get(`/get_all_users`, UserController.getAllUsers);
router.post(`/auth`, UserController.authentication);
router.get(`/delete_user`, UserController.deleteUser);
router.put(`/update_user`, UserController.updateUser);

module.exports = router;