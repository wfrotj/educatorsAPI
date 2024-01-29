import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  firstName: String,
  lastName: String,
  middleInitial: String,
  age: Number,
  employeeNumber: String,
  depEdEmail: String,
  gender: String,
  gradeLevel: String,
  education: {
    highestDegree: String,
    school: String,
    major: String,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
