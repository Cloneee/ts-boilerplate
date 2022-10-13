import { Schema, model } from 'mongoose';
const Player = new Schema({
  fee: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  follower: {
    type: Number,
    required: true
  },
  hiredTime: {
    type: Number,
    required: true
  },
  completeRate: {
    type: Schema.Types.Decimal128,
    required: true
  },
  album: [{
    type: String
  }],
  device: [{
    type: String
  }],
  game: [{
    type: String
  }],
  dateJoin: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

export default model('Player', Player);