const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: "string",
    username: "string",
    password: "string",
    email: "string",
    isAdmin: Boolean,
    permissions: Array,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
