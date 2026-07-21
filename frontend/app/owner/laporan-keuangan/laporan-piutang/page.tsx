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
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
};

type LinkIconProps = { size?: number; color?: string };

function AlertCircleIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function ClockIcon({ size = 20, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function WatermarkAlertIcon({ size = 130, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.4} />
      <path d="M12 8v5" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="M12 16h.01" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

function WatermarkClockIcon({ size = 130, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.4} />
      <path d="M12 6v6l4 2" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon({ size = 16, color = adminColors.textMuted }: LinkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function SearchIcon({ size = 18, color = adminColors.textMuted }: LinkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

type PiutangRow = {
  pelanggan: string;
  tanggal: string;
  kasir: string;
  total: string;
  sisaBayar: string;
};

const sudahJatuhTempo: PiutangRow[] = [
  { pelanggan: "sonia", tanggal: "16 Jul 2026", kasir: "Bobyrianto Nainggolan", total: "Rp 53.940", sisaBayar: "Rp 53.940" },
  { pelanggan: "Babe 2", tanggal: "6 Jul 2026", kasir: "Bobyrianto Nainggolan", total: "Rp 10.000", sisaBayar: "Rp 10.000" },
  { pelanggan: "Media Ayo Cuci", tanggal: "2 Jul 2026", kasir: "Bobyrianto Nainggolan", total: "Rp 11.000", sisaBayar: "Rp 1.000" },
  { pelanggan: "sonia", tanggal: "2 Jul 2026", kasir: "Bobyrianto Nainggolan", total: "Rp 6.000", sisaBayar: "Rp 6.000" },
];

const belumJatuhTempo: PiutangRow[] = [
  { pelanggan: "sonia", tanggal: "2 Jul 2026", kasir: "Bobyrianto Nainggolan", total: "Rp 10.000", sisaBayar: "Rp 0" },
];

function PiutangTable({ rows }: { rows: PiutangRow[] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
            Pelanggan
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
            Kasir
          </th>
          <th
            style={{
              textAlign: "right",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: 0.5,
              color: adminColors.textMuted,
              padding: "12px 14px",
              textTransform: "uppercase",
            }}
          >
            Total
          </th>
          <th
            style={{
              textAlign: "right",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: 0.5,
              color: adminColors.textMuted,
              padding: "12px 14px",
              textTransform: "uppercase",
            }}
          >
            Sisa Bayar
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={`${row.pelanggan}-${row.tanggal}-${index}`}
            style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}
          >
            <td style={{ padding: "16px 14px", fontSize: 14, fontWeight: 600, color: adminColors.ink }}>
              {row.pelanggan}
            </td>
            <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
              {row.tanggal}
            </td>
            <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
              {row.kasir}
            </td>
            <td
              style={{
                padding: "16px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: adminColors.orange,
                textAlign: "right",
              }}
            >
              {row.total}
            </td>
            <td
              style={{
                padding: "16px 14px",
                fontSize: 14,
                fontWeight: 600,
                color: adminColors.orange,
                textAlign: "right",
              }}
            >
              {row.sisaBayar}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function LaporanPiutangPage() {
  const [bulan, setBulan] = useState("Juli");
  const [tahun, setTahun] = useState("2026");
  const [outlet, setOutlet] = useState("Cece Laundry");
  const [search, setSearch] = useState("");

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
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
              Laporan Keuangan
            </span>
          </div>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: adminColors.ink,
              margin: "0 0 8px",
            }}
          >
            Laporan Piutang
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: adminColors.textMuted,
              margin: 0,
            }}
          >
            Rincian sisa tagihan pelanggan.
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
              <option>Januari</option>
              <option>Februari</option>
              <option>Maret</option>
              <option>April</option>
              <option>Mei</option>
              <option>Juni</option>
              <option>Juli</option>
              <option>Agustus</option>
              <option>September</option>
              <option>Oktober</option>
              <option>November</option>
              <option>Desember</option>
            </select>
            <ChevronDownIcon size={14} color={adminColors.textMuted} />
            <span
              style={{
                width: 1,
                height: 18,
                backgroundColor: localColors.cardBorder,
              }}
            />
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
                fontWeight: 600,
                color: adminColors.ink,
                cursor: "pointer",
              }}
            >
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
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
              <option>Cece Laundry</option>
              <option>Semua Outlet</option>
            </select>
            <ChevronDownIcon size={14} color={adminColors.textMuted} />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          backgroundColor: localColors.cardBg,
          border: `1px solid ${localColors.cardBorder}`,
          borderRadius: adminRadii.sm,
          padding: "14px 18px",
          marginBottom: 20,
        }}
      >
        <SearchIcon />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari nama pelanggan / nomor nota"
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14,
            color: adminColors.ink,
            width: "100%",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: localColors.cardBg,
            border: `1px solid ${localColors.cardBorder}`,
            borderRadius: adminRadii.lg ?? 16,
            padding: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", bottom: -30, right: -20 }}>
            <WatermarkAlertIcon />
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: adminRadii.sm,
              backgroundColor: localColors.iconPeachBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <AlertCircleIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Jatuh Tempo (3 pelanggan)
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>
            Rp 70.940
          </div>
        </div>

        <div
          style={{
            position: "relative",
            backgroundColor: localColors.cardBg,
            border: `1px solid ${localColors.cardBorder}`,
            borderRadius: adminRadii.lg ?? 16,
            padding: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", bottom: -20, right: -20 }}>
            <WatermarkClockIcon />
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: adminRadii.sm,
              backgroundColor: localColors.iconBlueBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <ClockIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Belum Jatuh Tempo (1 pelanggan)
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>
            Rp 0
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: localColors.cardBg,
          border: `1px solid ${localColors.cardBorder}`,
          borderRadius: adminRadii.lg ?? 16,
          padding: 24,
          marginBottom: 20,
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
            <AlertCircleIcon size={18} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
            Sudah Jatuh Tempo
          </div>
        </div>

        <PiutangTable rows={sudahJatuhTempo} />
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
            <ClockIcon size={18} color={adminColors.orange} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
            Belum Jatuh Tempo
          </div>
        </div>

        <PiutangTable rows={belumJatuhTempo} />
      </div>
    </div>
  );
}   