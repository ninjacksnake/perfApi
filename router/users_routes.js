const express = require("express");

const router = new express.Router();

// controllers goes here
const users = require("../controllers/usersController");

router.post('/login',users.login);
router.post("/", users.createUser);
router.get("/", users.getUser);
router.get("/:id", users.getUser);

module.exports = router;
