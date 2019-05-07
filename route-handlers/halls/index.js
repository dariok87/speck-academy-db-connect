const express = require('express');
const router = new express.Router();
const hallsController = require('./controller');

router.route("/").get(hallsController.getHalls);
router.route("/:id").get(hallsController.getHallByid);
router.route("/create").post(hallsController.createHall);
router.route("/edit/:id").put(hallsController.updateHall);
router.route("/delete/:id").delete(hallsController.deleteHall);

module.exports = router;