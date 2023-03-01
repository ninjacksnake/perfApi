const mongoose = require("mongoose");
const ingredientsSchema = new mongoose.Schema({
  name: "string",
});
const perfumeSchema = new mongoose.Schema({
  name: "string",
  perfumist: "string",
  performance: "string",
  type: "string",
  discontinued: Boolean,
  ingredients: [ingredientsSchema],
});

const Perfume = mongoose.model("perfumes", perfumeSchema);

module.exports = Perfume;
