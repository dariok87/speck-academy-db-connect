const express = require('express');
const router = new express.Router();
const reservationsController = require('./controller');

router.route("/").get(reservationsController.getReservations);

module.exports = router;