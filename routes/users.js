const router = require("express").Router();
const userController = require("../controllers/userController");
router.post("/", userController.user_create);
router.get("/", userController.user_all);
router.get("/:Id", userController.user_details);
router.put("/:Id", userController.user_update);
router.delete("/:Id", userController.user_delete);
module.exports = router; 