const { Router } = require("express");
const users_controller = require("./users_controller");

const router = Router();

router.get('/', users_controller.getUsers);
router.post('/', users_controller.addUser);
router.get('/:id', users_controller.getUserById);
router.delete('/:id', users_controller.deleteUser);
router.put('/:id', users_controller.updateUser);

module.exports = router;
