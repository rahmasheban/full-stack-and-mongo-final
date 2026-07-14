import express from "express";
console.log("USER ROUTES LOADED");
import {
  registerUser,
  loginUser,
    getUsers,
      changePassword,

} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put(
  "/change-password",
  changePassword
);
router.get("/", getUsers);
router.get("/test", (req, res) => {
  res.json({
    message: "users route works",
  });
});

export default router;