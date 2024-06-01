import { Schema, model, models } from 'mongoose';

const UserImageSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      refs: 'users',
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default models.UserImage || model('UserImage', UserImageSchema);
