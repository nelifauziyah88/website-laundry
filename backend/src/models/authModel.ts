import { RowDataPacket } from "mysql2";
import { pool } from "../config/db";

export type LoginUser = {
  id: number;
  nama: string;
  email: string;
  nomor_hp: string | null;
  password: string | null;
  google_id: string | null;
  avatar_url: string | null;
  created_at: Date;
  updated_at?: Date;
};

const USER_COLUMNS = `
  id,
  nama,
  email,
  nomor_hp,
  password,
  google_id,
  avatar_url,
  created_at,
  updated_at
`;

export async function findByEmail(
  email: string
): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ${USER_COLUMNS}
     FROM login
     WHERE email = ?
     LIMIT 1`,
    [email]
  );

  return (rows[0] as LoginUser | undefined) ?? null;
}

export async function findByGoogleId(
  googleId: string
): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ${USER_COLUMNS}
     FROM login
     WHERE google_id = ?
     LIMIT 1`,
    [googleId]
  );

  return (rows[0] as LoginUser | undefined) ?? null;
}

export async function findById(
  id: number
): Promise<LoginUser | null> {
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT ${USER_COLUMNS}
     FROM login
     WHERE id = ?
     LIMIT 1`,
    [id]
  );

  return (rows[0] as LoginUser | undefined) ?? null;
}

export async function linkGoogleToExisting(
  id: number,
  googleId: string,
  avatarUrl: string | null
): Promise<LoginUser> {
  await pool.query(
    `UPDATE login
     SET
       google_id = ?,
       avatar_url = COALESCE(?, avatar_url)
     WHERE id = ?`,
    [googleId, avatarUrl, id]
  );

  const user = await findById(id);

  if (!user) {
    throw new Error(
      "Akun tidak ditemukan setelah ditautkan ke Google"
    );
  }

  return user;
}

type UpdateProfileData = {
  nama: string;
  email: string;
  nomorHp: string | null;
  passwordHash?: string;
};

export async function updateProfileById(
  id: number,
  data: UpdateProfileData
): Promise<LoginUser> {
  const fields = [
    "nama = ?",
    "email = ?",
    "nomor_hp = ?",
  ];

  const values: Array<string | number | null> = [
    data.nama,
    data.email,
    data.nomorHp,
  ];

  if (data.passwordHash) {
    fields.push("password = ?");
    values.push(data.passwordHash);
  }

  values.push(id);

  await pool.query(
    `UPDATE login
     SET ${fields.join(", ")}
     WHERE id = ?`,
    values
  );

  const user = await findById(id);

  if (!user) {
    throw new Error(
      "Akun tidak ditemukan setelah diperbarui"
    );
  }

  return user;
}