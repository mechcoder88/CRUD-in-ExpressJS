import mongoose from 'mongoose'

// Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: { type: mongoose.Decimal128, required: true, validate: (value) => value >= 5000.5 }
})

// Creating Model/Compiling Schema 
const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel
