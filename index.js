import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import authMiddleware from "./src/middleware/auth.middleware.js";
import roleMiddleware from "./src/middleware/role.middleware.js";
import paymentRoutes from "./src/routes/payment.routes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

dbConnect();
app.use('/api/auth',authRoutes)
app.use("/api/payment", paymentRoutes);


const PORT = process.env.PORT || 5000;

app.get("/api/test", authMiddleware, (req, res) => {
  res.json({ message: "Protected access", user: req.user });
});
app.get("/api/user", authMiddleware, (req, res) => {
  res.json({ message: "User access granted" });
});
app.get(
  "/api/admin",
  authMiddleware,
  roleMiddleware(["admin"]),
  (req, res) => {
    res.json({ message: "Admin access granted" });
  }
);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
