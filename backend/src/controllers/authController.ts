import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  findByEmail,
  findById,
  updateProfileById,
  LoginUser,
} from "../models/authModel";

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
    { expiresIn: "7d" },
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

export async function me(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Belum login",
      });
    }

    const user = await findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "Akun tidak ditemukan",
      });
    }

    return res.json({
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
        nomorHp: user.nomor_hp ?? "",
        avatarUrl: user.avatar_url,
        menggunakanGoogle: Boolean(user.google_id),
        memilikiPassword: Boolean(user.password),
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);

    return res.status(500).json({
      message: "Gagal mengambil profil",
    });
  }
}

export async function updateProfile(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "Belum login",
      });
    }

    const { nama, email, nomorHp, passwordBaru, konfirmasiPassword } =
      req.body as {
        nama?: string;
        email?: string;
        nomorHp?: string;
        passwordBaru?: string;
        konfirmasiPassword?: string;
      };

    if (!nama?.trim() || !email?.trim()) {
      return res.status(400).json({
        message: "Nama dan email wajib diisi",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingEmail = await findByEmail(normalizedEmail);

    if (existingEmail && Number(existingEmail.id) !== Number(userId)) {
      return res.status(409).json({
        message: "Email sudah digunakan akun lain",
      });
    }

    if (passwordBaru) {
      if (passwordBaru.length < 8) {
        return res.status(400).json({
          message: "Password minimal harus terdiri dari 8 karakter",
        });
      }

      if (passwordBaru !== konfirmasiPassword) {
        return res.status(400).json({
          message: "Konfirmasi password tidak sama",
        });
      }
    }

    const passwordHash = passwordBaru
      ? await bcrypt.hash(passwordBaru, 10)
      : undefined;

    const updatedUser = await updateProfileById(userId, {
      nama: nama.trim(),
      email: normalizedEmail,
      nomorHp: nomorHp?.trim() || null,
      passwordHash,
    });

    const token = issueToken(updatedUser);

    res.cookie("token", token, {
      ...COOKIE_OPTIONS,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      message: "Profil berhasil diperbarui",
      user: {
        id: updatedUser.id,
        nama: updatedUser.nama,
        email: updatedUser.email,
        nomorHp: updatedUser.nomor_hp ?? "",
        avatarUrl: updatedUser.avatar_url,
        menggunakanGoogle: Boolean(updatedUser.google_id),
        memilikiPassword: Boolean(updatedUser.password),
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);

    return res.status(500).json({
      message: "Gagal memperbarui profil",
    });
  }
}

export function logout(req: Request, res: Response) {
  res.clearCookie("token", COOKIE_OPTIONS);
  return res.json({ message: "Logout berhasil" });
}
