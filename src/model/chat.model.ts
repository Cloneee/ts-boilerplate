import { Schema, model } from 'mongoose';
const Chat = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  player: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'player'
  },
  messages: [{
    sender: {
      type: Schema.Types.ObjectId,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      required: true,
      default: Date.now()
    }
  }],
  totalMessage: {
    type: Number,
    required: true
  }
});

export default model('Chat', Chat);