const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/workout"
);

const workoutSeed = [
  {
    workout: "curls",
    info: "10 sets of curls",
    date: new Date(Date.now())
  }
];

db.workout
  .remove({})
  .then(() => db.workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
