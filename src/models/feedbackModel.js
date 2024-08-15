import mongoose from "mongoose";
const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Feedback = model("Feedback", feedbackSchema);
export default Feedback;
