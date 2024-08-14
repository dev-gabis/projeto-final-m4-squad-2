import { model, Schema } from "mongoose"

const mentoringsSchema = new Schema({
  mentor_id: {
    type: ObjectId,
    required: true
  },
  young_id: {
    type: ObjectId,
    required: true,

  },
  mentorings_date: {
    type: Date,
    required: true
  },
  topics: {
    type: [String],
    default: []
  },
  feedback: {
    type: String,
    default: ""
  },
});

const Mentorings = model("Mentoring", mentoringsSchema);
export default Mentorings;


