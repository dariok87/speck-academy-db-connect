const express = require('express');
const router = new express.Router();
const reservationsController = require('./controller');

router.route("/").get(reservationsController.getReservations);
router.route("/:id").get(reservationsController.getreservationsByid);

module.exports = router;