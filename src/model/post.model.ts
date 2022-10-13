import { Schema, model } from 'mongoose';
const Post = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  content: {
    type: String,
    required: true
  },
  media: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

export default model('Post', Post);