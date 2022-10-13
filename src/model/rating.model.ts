import { Schema, model } from 'mongoose';
const Rating = new Schema({
  player: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'player'
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  comment: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

export default model('Rating', Rating);