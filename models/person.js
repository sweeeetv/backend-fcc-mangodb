const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: string,
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
