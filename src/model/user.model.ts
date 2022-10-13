import { Schema, Types, model, Document } from 'mongoose';

const defaultAvatar =
  'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg';

export interface IUser extends Document{
  username: string;
  password: string;
  email: string;
  isVerify: boolean;
  gender: string;
  nickname: string;
  dateOfBirth: Date;
  language: string;
  nation: string;
  avatar: string;
  urlCode: string;
  balance: number;
  donate: number;
  followPlayers?: Types.ObjectId[];
  dateJoin: Date;
  donateTotal: number;
  otp: {
    code: number;
    expire: Date;
  }
}

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  isVerify: {
    type: Boolean,
    required: true,
    default: false,
  },
  gender: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default: defaultAvatar,
  },
  urlCode: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  donate: {
    type: Number,
    required: true,
    default: 0,
  },
  followPlayers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Player',
    },
  ],
  dateJoin: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  donateTotal: {
    type: Number,
    required: true,
    default: 0,
  },
  otp: {
    code: Number,
    expire: Date,
  }
});

export default model<IUser>('User', User);
