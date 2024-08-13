import { model, Schema } from "mongoose";

const opportunitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    default: []
  },
  company: {
    type: String,
    required: true
  },
  publicationDate: {
    type: Date,
    default: Date.now
  }
});

const OpportunityModel = model("Opportunity", opportunitySchema);
export default OpportunityModel;
