const express = require('express');
const router = new express.Router();
const reservationsController = require('./controller');

router.route("/").get(reservationsController.getReservations);
router.route("/:id").get(reservationsController.getreservationsByid);
router.route("/create").post(reservationsController.createReservations);
router.route("/edit/:id").put(reservationsController.updateReservations);
router.route("/delete/:id").delete(reservationsController.deleteReservations);

module.exports = router;