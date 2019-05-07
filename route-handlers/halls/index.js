const express = require('express');
const router = new express.Router();
const hallsController = require('./controller');

router.route("/").get(hallsController.getHalls);

module.exports = router;