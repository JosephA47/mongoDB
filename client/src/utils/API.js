import axios from "axios";

export default {
  getWorkout: function() {
    return axios.get("/api/workout");
  },
  getWorkoutId: function(id) {
    return axios.get("/api/workout/" + id);
  },
  updateWorkout: function(id) {
    return axios.update("/api/workout/" + id);
  },
  saveWorkout: function(WorkoutData) {
    return axios.post("/api/workout", WorkoutData);
  },
  deleteWorkout: function(id) {
    return axios.delete("/api/workout/" + id)
  }
};
