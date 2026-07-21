import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail, LoginUser } from "../models/authModel";

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

function issueToken(user: LoginUser) {
  return jwt.sign(
    { id: user.id, email: user.email, nama: user.nama },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password wajib diisi" });
  }

  const user = await findByEmail(email);

  if (!user || !user.password) {
    return res.status(401).json({ message: "Email atau password salah" });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: "Email atau password salah" });
  }

  const token = issueToken(user);
  res.cookie("token", token, COOKIE_OPTIONS);

  return res.json({
    message: "Login berhasil",
    redirectTo: "/owner/dashboard",
    user: { id: user.id, nama: user.nama, email: user.email },
  });
}

export function googleCallback(req: Request, res: Response) {
  const user = req.user as unknown as LoginUser;
  const token = issueToken(user);

  res.cookie("token", token, COOKIE_OPTIONS);

  const frontendUrl = process.env.FRONTEND_URL as string;
  return res.redirect(`${frontendUrl}/owner/dashboard`);
}

export function me(req: Request, res: Response) {
  return res.json({ user: req.user });
}

export function logout(req: Request, res: Response) {
  res.clearCookie("token", COOKIE_OPTIONS);
  return res.json({ message: "Logout berhasil" });
}
