import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import crypto from "crypto";

export const makePayment = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }

    // generate fake payment id
    const paymentId = crypto.randomUUID();

    // save transaction
    const transaction = await Transaction.create({
      user: req.user.userId,
      amount,
      paymentId,
      status: "success"
    });

    // mark user as paid
    await User.findByIdAndUpdate(req.user.userId, {
      isPaid: true
    });

    res.status(200).json({
      message: "Payment successful",
      transaction
    });
  } catch (error) {
    res.status(500).json({ message: "Payment failed" });
  }
};
