const { Router } = require("express");

const sessions_controller = require("./sessions_controller");

const router = Router();

router.get('/', sessions_controller.getSessions);
router.get("/:id", sessions_controller.getSessionById);

module.exports = router;