const express = require('express');
const router = new express.Router();
const usersController = require('./controller');

router.route("/").get(usersController.getUsers);
router.route("/create").post(usersController.createUser);
router.route("/:id").get(usersController.getUsersByid);

module.exports = router;