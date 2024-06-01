import { Schema, model, models } from 'mongoose';

const BackgroundImageSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default models.BackgroundImage ||
  model('BackgroundImage', BackgroundImageSchema);
