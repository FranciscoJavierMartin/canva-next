import { Schema, model, models } from 'mongoose';

const DesignImageSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default models.DesignImage || model('DesignImage', DesignImageSchema);
