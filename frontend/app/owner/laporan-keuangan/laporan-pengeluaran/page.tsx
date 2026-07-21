"use client";

import { useState } from "react";
import { adminColors, adminRadii } from "../../adminTheme";
import { ChevronDownIcon } from "../../components/Icons";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  iconPurpleBg: "#F1E9FC",
  iconPurple: "#9B5DE5",
  iconBlueBg: "#E7F0FC",
  iconBlue: "#3B82F6",
  iconPeachBg: "#FDECE2",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
  progressTrack: "#FBE4D8",
};

type LinkIconProps = { size?: number; color?: string };

function ShoppingBagIcon({ size = 20, color = localColors.iconPurple }: LinkIconProps) {
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
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function ReceiptIcon({ size = 20, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="14" height="18" rx="2" stroke={color} strokeWidth={2} />
      <path d="M7 8h6" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <path d="M7 12h6" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <path d="M7 16h4" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <circle cx="18" cy="18" r="5" fill={color} />
      <text x="18" y="20.5" fontSize="7" fontWeight={600} fill="#FFFFFF" textAnchor="middle">
        $
      </text>
    </svg>
  );
}

function PieChartIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function WatermarkBagIcon({ size = 120, color = localColors.iconPurple }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.08}>
      <path d="M6 8h12l-1 12H7L6 8Z" stroke={color} strokeWidth={1.4} />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

function WatermarkReceiptIcon({ size = 120, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <rect x="3" y="3" width="14" height="18" rx="2" stroke={color} strokeWidth={1.4} />
      <circle cx="18" cy="18" r="5" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

function WatermarkPieIcon({ size = 120, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.4} />
      <path d="M12 2v10l7 5" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

function CalendarIcon({ size = 16, color = adminColors.textMuted }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </svg>
  );
}

function DownloadIcon({ size = 16, color = adminColors.white }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

function TableIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M9 10v10" />
    </svg>
  );
}

type DailyRow = {
  tanggal: string;
  transaksi: number;
  total: string;
};

type CategoryBreakdown = {
  label: string;
  amount: string;
  percent: number;
};

const dailyRows: DailyRow[] = [{ tanggal: "2 Jul 2026", transaksi: 1, total: "Rp 10.000" }];

const categoryBreakdown: CategoryBreakdown[] = [
  { label: "Sabun & Pewangi", amount: "Rp 10.000", percent: 100 },
];

export default function LaporanPengeluaranPage() {
  const [bulan, setBulan] = useState("Juli");
  const [tahun, setTahun] = useState("2026");
  const [outlet, setOutlet] = useState("Cece Laundry");

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
              Laporan Keuangan
            </span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 600, color: adminColors.ink, margin: "0 0 8px" }}>
            Laporan Pengeluaran
          </h2>
          <p style={{ fontSize: 14.5, color: adminColors.textMuted, margin: 0 }}>
            Rincian pengeluaran operasional untuk bulan &amp; outlet yang dipilih di bawah.
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

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: adminColors.orange,
              color: adminColors.white,
              border: "none",
              borderRadius: adminRadii.sm,
              padding: "12px 18px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <DownloadIcon />
            Export
            <ChevronDownIcon size={14} color={adminColors.white} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
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
          <div style={{ position: "absolute", bottom: -20, right: -20 }}>
            <WatermarkBagIcon />
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: adminRadii.sm,
              backgroundColor: localColors.iconPurpleBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <ShoppingBagIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Total Pengeluaran
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>
            Rp 10.000
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
            <WatermarkReceiptIcon />
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
            <ReceiptIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Total Transaksi
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.ink }}>1</div>
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
            <WatermarkPieIcon />
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
            <PieChartIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Kategori Terbesar
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, color: adminColors.ink, marginBottom: 2 }}>
            Sabun &amp; Pewangi
          </div>
          <div style={{ fontSize: 15, fontWeight: 600, color: adminColors.orange }}>Rp 10.000</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, alignItems: "start" }}>
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
              <TableIcon size={18} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
                Rincian Harian
              </div>
              <div style={{ fontSize: 13, color: adminColors.textMuted }}>
                Pengeluaran per hari di bulan ini.
              </div>
            </div>
          </div>

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
                  Transaksi
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
              </tr>
            </thead>
            <tbody>
              {dailyRows.map((row) => (
                <tr key={row.tanggal} style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}>
                  <td style={{ padding: "16px 14px", fontSize: 14, fontWeight: 500, color: adminColors.orange }}>
                    {row.tanggal}
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.transaksi}
                  </td>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: adminColors.ink,
                      textAlign: "right",
                    }}
                  >
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            backgroundColor: localColors.cardBg,
            border: `1px solid ${localColors.cardBorder}`,
            borderRadius: adminRadii.lg ?? 16,
            padding: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
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
              <PieChartIcon size={18} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
                Detail Pengeluaran
              </div>
              <div style={{ fontSize: 13, color: adminColors.textMuted }}>
                Distribusi pengeluaran per kategori bulan ini.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {categoryBreakdown.map((category) => (
              <div key={category.label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: adminColors.ink }}>
                    {category.label}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: adminColors.orange }}>
                    {category.amount}
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 8,
                    borderRadius: 999,
                    backgroundColor: localColors.progressTrack,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${category.percent}%`,
                      height: "100%",
                      borderRadius: 999,
                      backgroundColor: adminColors.orange,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}