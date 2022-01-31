const { Router } = require("express");
const agents_controller = require("./agents_controller");

const router = Router();

router.get("/", agents_controller.getAgents);
router.get("/:id", agents_controller.getAgentById);

module.exports = router;