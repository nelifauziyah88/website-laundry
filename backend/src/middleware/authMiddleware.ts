import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export type AuthPayload = {
  id: number;
  email: string;
  nama: string;
};

declare global {
  namespace Express {
    interface User extends AuthPayload {}
  }
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Belum login" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ message: "Sesi tidak valid, silakan login kembali" });
  }
}