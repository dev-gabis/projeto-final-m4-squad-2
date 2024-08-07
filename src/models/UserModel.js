import { model, Schema, ObjectId } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enums: ["jovem", "mentor"]
  },
  bio: {
    type: String,
    default: ''
  },
  experiences: {
    type: [String],
    default: []
  },
  skills: {
    type: [String],
    default: []
  },
  applications: {
    type: [ObjectId],
    default: []
  }

});

const User = model("User", userSchema);
export default User;