const bcrypt = require("bcrypt");
const User = require("../models/user");

const permissions = [
  "CANVIEW_PROFILE",
  "CANEDIT_PROFILE",
  "CANVIEW_HOME",
  "CANVIEW_ABOUT",
];

module.exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const saltRounds = 10;
    let pass = await bcrypt.hash(req.body.password, saltRounds);
    const user = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: pass,
      permissions,
    };
    console.log(user.permisions);
    const newUser = await User.create(user);
    newUser.password = undefined;
    res.send(newUser);
  } catch (e) {
    console.log(e);
  }
};

module.exports.getUser = async (req, res) => {
  //console.log(req.params.id);
  let result;
  try {
    if (req.params.id !== undefined) {
      result = await User.findOne({ _id: req.params.id }).select(
        "_id name email permissions"
      );
    } else {
      result = await User.find({}).select("_id name email");
    }
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    result = await User.findOne({ username: userName });
    console.log(result);
    if (!result) {
      return res.status(200).send({
        loggedIn: false,
        errorMessage: "Username or password incorrect",
        type: "UNF",
      }); // user not found
    }

    const match = await bcrypt.compare(password, result.password);

    if (match) {
      result.password = undefined;
      return res.status(200).send({ loggedIn: true, user: result });
    } else {
      return res
        .status(200)
        .send({
          loggedIn: false,
          loggedIn: false,
          errorMessage: "Username or password incorrect",
          type: "UNF",
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      loggedIn: false,
      errorMessage: "not able to login contact the administator",
      type: "N/D",
    });
  }
};
