const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error.message || error };
  }
};

const getOneWorkout = (workoutId) => {
  console.log("workout is:", workoutId);
  console.log(DB.workouts);
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workoutId) {
    return;
  }
  console.log("workout is:", workout);
  return workout;
};

module.exports = { getAllWorkouts, createNewWorkout, getOneWorkout };
