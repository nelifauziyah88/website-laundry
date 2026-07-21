"use client";

import { useState } from "react";
import { adminColors, adminRadii } from "../../adminTheme";
import { ChevronDownIcon } from "../../components/Icons";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  iconPeachBg: "#FDECE2",
  iconBlueBg: "#E7F0FC",
  iconBlue: "#3B82F6",
  iconGreenBg: "#E4F7EE",
  iconGreen: "#22C55E",
  iconPurpleBg: "#F1EBFC",
  iconPurple: "#8B5CF6",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
};

type IconProps = { size?: number; color?: string };

function UserPlusIcon({ size = 20, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="4" />
      <path d="M2 20c0-4.4 3.1-7 7-7s7 2.6 7 7" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  );
}

function UsersIcon({ size = 20, color = localColors.iconBlue }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M2.5 20c0-3.6 2.7-6 5.5-6s5.5 2.4 5.5 6" />
      <path d="M14.5 14.4c2.4.2 4.5 2.3 4.5 5.6" />
    </svg>
  );
}

function UserIcon({ size = 20, color = localColors.iconPurple }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}

function CalendarIcon({ size = 16, color = adminColors.textMuted }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function WatermarkUserPlusIcon({ size = 110, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.08}>
      <circle cx="9" cy="8" r="4" stroke={color} strokeWidth={1.4} />
      <path d="M2 20c0-4.4 3.1-7 7-7s7 2.6 7 7" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M19 8v6" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M16 11h6" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function WatermarkUsersIcon({ size = 110, color = localColors.iconBlue }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="8" cy="8" r="3.2" stroke={color} strokeWidth={1.4} />
      <circle cx="17" cy="9" r="2.8" stroke={color} strokeWidth={1.4} />
      <path d="M2.5 20c0-3.6 2.7-6 5.5-6s5.5 2.4 5.5 6" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M14.5 14.4c2.4.2 4.5 2.3 4.5 5.6" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function WatermarkUserIcon({ size = 110, color = localColors.iconPurple }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth={1.4} />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

type PelangganBaru = {
  tanggal: string;
  nama: string;
  noHp: string;
  jenisKelamin: "L" | "P" | "-";
};

const outlets = ["Cece Laundry", "Bintang Laundry", "Ayo Cuci Sejahtera"];

const pelangganBaruBulanIni: PelangganBaru[] = [
  { tanggal: "2 Jul 2026", nama: "Media Ayo Cuci", noHp: "08136883187", jenisKelamin: "P" },
  { tanggal: "6 Jul 2026", nama: "Babe 2", noHp: "081365492740", jenisKelamin: "L" },
  { tanggal: "9 Jul 2026", nama: "Bob Nainggolan", noHp: "081248118613", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "Cek Bonus", noHp: "0889", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "Cek Nomor", noHp: "0808", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "Cek Pulsa", noHp: "0888", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "Contact Center", noHp: "188", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "Data Transaksi", noHp: "0887", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "NSP1212", noHp: "1212", jenisKelamin: "-" },
  { tanggal: "9 Jul 2026", nama: "TELKOMSEL", noHp: "0111", jenisKelamin: "-" },
];

const bulanOptions = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const tahunOptions = ["2024", "2025", "2026"];

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

export default function DetailLaporanPelangganPage() {
  const [bulan, setBulan] = useState("Juli");
  const [tahun, setTahun] = useState("2026");
  const [outlet, setOutlet] = useState(outlets[0]);

  const pelangganBaru = 10;
  const priaWanita = { pria: 1, wanita: 1 };
  const pelangganBertransaksi = 3;
  const totalOrderNominal = 90940;

  const statCards = [
    {
      label: "Pelanggan Baru",
      value: String(pelangganBaru),
      icon: <UserPlusIcon />,
      watermark: <WatermarkUserPlusIcon />,
      bg: localColors.iconPeachBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Pria / Wanita",
      value: `${priaWanita.pria} / ${priaWanita.wanita}`,
      icon: <UsersIcon color={localColors.iconBlue} />,
      watermark: <WatermarkUsersIcon color={localColors.iconBlue} />,
      bg: localColors.iconBlueBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Pelanggan Bertransaksi",
      value: String(pelangganBertransaksi),
      icon: <UsersIcon color={localColors.iconGreen} />,
      watermark: <WatermarkUsersIcon color={localColors.iconGreen} />,
      bg: localColors.iconGreenBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Total Order (5)",
      value: formatRupiah(totalOrderNominal),
      icon: <UserIcon color={localColors.iconPurple} />,
      watermark: <WatermarkUserIcon color={localColors.iconPurple} />,
      bg: localColors.iconPurpleBg,
      valueColor: adminColors.orange,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: localColors.pageBg,
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: adminColors.orange,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 1,
                color: adminColors.orange,
                textTransform: "uppercase",
              }}
            >
              Laporan Pelanggan
            </span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 500, color: adminColors.ink, margin: "0 0 8px" }}>
            Detail Laporan Pelanggan
          </h2>
          <p style={{ fontSize: 14.5, color: adminColors.textMuted, margin: 0 }}>
            Pertumbuhan &amp; pelanggan baru per bulan.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: localColors.cardBg,
              border: `1px solid ${localColors.cardBorder}`,
              borderRadius: adminRadii.sm,
              padding: "10px 16px",
            }}
          >
            <CalendarIcon />
            <select
              value={bulan}
              onChange={(e) => setBulan(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                fontSize: 14,
                fontWeight: 600,
                color: adminColors.ink,
                cursor: "pointer",
              }}
            >
              {bulanOptions.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
            <ChevronDownIcon size={14} color={adminColors.textMuted} />
            <span style={{ width: 1, height: 18, backgroundColor: localColors.cardBorder }} />
            <select
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                fontSize: 14,
                fontWeight: 500,
                color: adminColors.ink,
                cursor: "pointer",
              }}
            >
              {tahunOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <ChevronDownIcon size={14} color={adminColors.textMuted} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: localColors.cardBg,
              border: `1px solid ${localColors.cardBorder}`,
              borderRadius: adminRadii.sm,
              padding: "10px 16px",
            }}
          >
            <select
              value={outlet}
              onChange={(e) => setOutlet(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
                fontSize: 14,
                fontWeight: 600,
                color: adminColors.ink,
                cursor: "pointer",
              }}
            >
              {outlets.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <ChevronDownIcon size={14} color={adminColors.textMuted} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(180px, 1fr))",
          gap: 20,
          marginBottom: 20,
        }}
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              position: "relative",
              backgroundColor: localColors.cardBg,
              border: `1px solid ${localColors.cardBorder}`,
              borderRadius: adminRadii.lg ?? 16,
              padding: 24,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", bottom: -30, right: -20 }}>{card.watermark}</div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: adminRadii.sm,
                backgroundColor: card.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              {card.icon}
            </div>
            <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
              {card.label}
            </div>
            <div style={{ fontSize: 30, fontWeight: 500, color: card.valueColor }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: localColors.cardBg,
          border: `1px solid ${localColors.cardBorder}`,
          borderRadius: adminRadii.lg ?? 16,
          padding: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: adminRadii.sm,
              backgroundColor: localColors.iconPeachBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <UserPlusIcon size={18} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
            Pelanggan Baru Bulan Ini
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
            <thead>
              <tr style={{ backgroundColor: localColors.tableHeaderBg }}>
                <th
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    color: adminColors.textMuted,
                    padding: "12px 14px",
                    textTransform: "uppercase",
                  }}
                >
                  Tanggal
                </th>
                <th
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    color: adminColors.textMuted,
                    padding: "12px 14px",
                    textTransform: "uppercase",
                  }}
                >
                  Nama
                </th>
                <th
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    color: adminColors.textMuted,
                    padding: "12px 14px",
                    textTransform: "uppercase",
                  }}
                >
                  No. HP
                </th>
                <th
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    color: adminColors.textMuted,
                    padding: "12px 14px",
                    textTransform: "uppercase",
                  }}
                >
                  Jenis Kelamin
                </th>
              </tr>
            </thead>
            <tbody>
              {pelangganBaruBulanIni.map((row, index) => (
                <tr key={`${row.nama}-${index}`} style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}>
                  <td style={{ padding: "14px", fontSize: 14, color: adminColors.textMuted }}>
                    {row.tanggal}
                  </td>
                  <td style={{ padding: "14px", fontSize: 14, fontWeight: 500, color: adminColors.ink }}>
                    {row.nama}
                  </td>
                  <td style={{ padding: "14px", fontSize: 14, color: adminColors.textMuted }}>
                    {row.noHp}
                  </td>
                  <td style={{ padding: "14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.jenisKelamin}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}