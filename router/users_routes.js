const express = require("express");

const router = new express.Router();

// controllers goes here
const users = require("../controllers/usersController");

router.post('/login',users.login);
router.post("/create", users.createUser);
router.get("/getUser", users.getUser);
router.get("/getUser/:id", users.getUser);

module.exports = router;
