import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
  gigId: {
    type: String,
    requried: true,
  },
  img: {
    type: String,
    requried: false,
  },
  title: {
    type: String,
    requried: true,
  },
  price: {
    type: Number,
    requried: true,
  },
  sellerId: {
    type: String,
    requried: true,
  },
  buyerId: {
    type: String,
    requried: true,
  },
  isCompleted: {
    type: Boolean,
    default: true,
  },
  payment_intent: {
    type: String,
    requried: true,
  },
},{
    timestamps:true
});

export default mongoose.model("Order", OrderSchema)