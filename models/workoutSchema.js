const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  workout: { type: String, required: true },
  info: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
