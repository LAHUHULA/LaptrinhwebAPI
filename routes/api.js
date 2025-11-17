import express from "express";
import { getAllUsers, getUserById } from "../controllers/userController.js";


const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to API route" });
});

// Route: GET /api/users
router.get("/users/", getAllUsers);

// Route: GET /api/users/:id
router.get("/users/:id", getUserById)


export default router;
