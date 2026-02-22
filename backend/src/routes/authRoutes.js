import { Router } from "express";
import { getMe } from "../controllers/authController.js";
import { protectRoute } from "../middleware/auth.js";

const router = Router();

router.get("/me", protectRoute, getMe);
router.post("/callback", authCallback);

export default router;