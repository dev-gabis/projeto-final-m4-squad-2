import { model, Schema, ObjectId } from "mongoose"

const mentoringSchema = new Schema({
  mentor_id: {
    type: ObjectId,
    required: true
  },
  young_id: {
    type: ObjectId,
    required: true,

  },
  mentoring_date: {
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

const Mentoring = model("Mentoring", mentoringSchema);
export default Mentoring;