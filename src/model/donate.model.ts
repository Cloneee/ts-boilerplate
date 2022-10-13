import { Schema, model } from 'mongoose';
const Donate = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  player: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Player'
  },
  money: {
    type: Number,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  mesage: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

export default model('Donate', Donate);