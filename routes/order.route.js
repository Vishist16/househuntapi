import express from "express";
//import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;