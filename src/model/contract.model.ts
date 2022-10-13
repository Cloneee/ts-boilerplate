import { Schema, model } from 'mongoose';
const Contract = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  player: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'player'
  },
  time: {
    type: Number,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

export default model('Contract', Contract);