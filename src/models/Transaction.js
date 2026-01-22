import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["success", "failed"],
      default: "success"
    },
    paymentId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
