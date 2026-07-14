import express from "express";
console.log("ORDER ROUTES LOADED");
import {
  getOrders,
  createOrder,
  updateOrderStatus,
   deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/test", (req, res) => {
  res.json({ message: "routes file loaded" });
});
router.put("/:id", updateOrderStatus);
router.delete("/:id", deleteOrder);

export default router;