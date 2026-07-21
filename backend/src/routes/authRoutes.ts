import { Router } from "express";
import passport from "../config/passport";
import { login, googleCallback, me, logout } from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/me", verifyToken, me);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL}/login?error=google`,
  }),
  googleCallback
);

export default router;
