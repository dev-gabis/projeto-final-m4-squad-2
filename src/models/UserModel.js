import { model, Schema } from "mongoose";

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
  experience: {
    type: [String],
    default: []
  },
  skills: {
    type: [String],
    default: []
  }

});

export const UserModel = model("User", userSchema);