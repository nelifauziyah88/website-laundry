# AyoCuci

## Fitur

Frontend yang sudah dibuat:

- Landing page
- Login
- Dashboard owner
- Laporan keuangan
- Laporan transaksi
- Laporan pelanggan
- Halaman pengaturan
- Profil admin dan profil outlet

Backend saat ini berfokus pada fitur autentikasi:

- Login menggunakan email dan password
- Login menggunakan akun Google
- Pemeriksaan sesi pengguna
- Proteksi halaman owner
- Logout
- Pengelolaan profil admin

> Data transaksi, pelanggan, keuangan, layanan, dan outlet yang ditampilkan saat ini masih berupa data dummy.

## Technology Stack

### Frontend

- Next.js
- React
- TypeScript

### Backend

- Express.js
- Node.js
- TypeScript
- MySQL
- Google OAuth
- JWT
- bcrypt

## Menjalankan Project

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend 

```bash
cd frontend
npm install
npm run dev
```
### Database
```bash
CREATE TABLE login (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  email VARCHAR(191) NOT NULL UNIQUE,
  nomor_hp VARCHAR(30) NULL,
  password VARCHAR(255) NULL,
  google_id VARCHAR(255) NULL UNIQUE,
  avatar_url TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP
);
```
