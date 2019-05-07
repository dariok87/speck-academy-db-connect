const express = require('express');
const router = new express.Router();
const hallsController = require('./controller');

router.route("/").get(hallsController.getHalls);
router.route("/:id").get(hallsController.getHallByid);

module.exports = router;