const workout = require("../database/workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const getOneWorkoutDetails = workout.getOneWorkout(workoutId);
  return getOneWorkoutDetails;
};

const createNewWorkout = (newWorkout) => {
  const workoutToAdd = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdWorkout = workout.createNewWorkout(workoutToAdd);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
