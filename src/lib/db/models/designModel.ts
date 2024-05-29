import { Schema, model, models } from 'mongoose';

const DesignSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      refs: 'users',
    },
    components: {
      type: Array,
      default: [],
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);

export default models.Design || model('Design', DesignSchema);
