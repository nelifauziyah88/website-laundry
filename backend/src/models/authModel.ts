import { pool } from "../config/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export type LoginUser = {
  id: number;
  nama: string;
  email: string;
  password: string | null;
  google_id: string | null;
  avatar_url: string | null;
  created_at: Date;
};

export async function findByEmail(email: string): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM login WHERE email = ? LIMIT 1",
    [email]
  );
  return (rows[0] as LoginUser) ?? null;
}

export async function findByGoogleId(googleId: string): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM login WHERE google_id = ? LIMIT 1",
    [googleId]
  );
  return (rows[0] as LoginUser) ?? null;
}

export async function findById(id: number): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM login WHERE id = ? LIMIT 1",
    [id]
  );
  return (rows[0] as LoginUser) ?? null;
}

export async function createUserWithPassword(
  nama: string,
  email: string,
  hashedPassword: string
): Promise<LoginUser> {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO login (nama, email, password) VALUES (?, ?, ?)",
    [nama, email, hashedPassword]
  );
  return (await findById(result.insertId)) as LoginUser;
}

export async function createUserWithGoogle(
  nama: string,
  email: string,
  googleId: string,
  avatarUrl: string | null
): Promise<LoginUser> {
  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO login (nama, email, google_id, avatar_url) VALUES (?, ?, ?, ?)",
    [nama, email, googleId, avatarUrl]
  );
  return (await findById(result.insertId)) as LoginUser;
}

export async function linkGoogleToExisting(
  id: number,
  googleId: string,
  avatarUrl: string | null
): Promise<LoginUser> {
  await pool.query(
    "UPDATE login SET google_id = ?, avatar_url = COALESCE(?, avatar_url) WHERE id = ?",
    [googleId, avatarUrl, id]
  );
  return (await findById(id)) as LoginUser;
}
