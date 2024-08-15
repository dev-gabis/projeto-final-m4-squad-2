import mongoose from 'mongoose';

const { Schema } = mongoose;

const applicationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Jovem',
    required: true
  },
  opportunityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Oportunidade',
    required: true
  },
  status: {
    type: String,
    enum: ['pendente', 'aceita', 'rejeitada'],
    default: 'pendente',
    required: true
  },
  applicationDate: {
    type: Date,
    default: Date.now,
    required: true
  }
}, {
  timestamps: true
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;