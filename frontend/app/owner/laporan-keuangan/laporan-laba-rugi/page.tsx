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
  iconPurpleBg: "#F1E9FC",
  iconPurple: "#9B5DE5",
  iconGreenBg: "#E3F7EA",
  iconGreen: "#3FA45E",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
  progressTrack: "#FBE4D8",
};

type LinkIconProps = { size?: number; color?: string };

function LinkIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function WalletIcon({ size = 20, color = localColors.iconBlue }: LinkIconProps) {
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
      <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3" />
      <path d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h4" />
    </svg>
  );
}

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

function TrendUpIcon({ size = 20, color = localColors.iconGreen }: LinkIconProps) {
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
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  );
}

function PieChartIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function CardIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function TableIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
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
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M9 10v10" />
    </svg>
  );
}

function WatermarkLinkIcon({ size = 110, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.08}>
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth={1.4} />
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WatermarkWalletIcon({ size = 110, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <path
        d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7v11a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4a2 2 0 1 0 0 4h4"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WatermarkBagIcon({ size = 110, color = localColors.iconPurple }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.08}>
      <path d="M6 8h12l-1 12H7L6 8Z" stroke={color} strokeWidth={1.4} />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

function WatermarkTrendIcon({ size = 110, color = localColors.iconGreen }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <path d="M3 17l6-6 4 4 8-8" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 7h4v4" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WatermarkPieIcon({ size = 110, color = adminColors.orange }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.4} />
      <path d="M12 2v10l7 5" stroke={color} strokeWidth={1.4} />
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

type DailyRow = {
  tanggal: string;
  omset: string;
  pendapatan: string;
  pengeluaran: string;
  labaRugi: string;
};

type BreakdownItem = {
  label: string;
  amount: string;
  percent: number;
};

const dailyRows: DailyRow[] = [
  { tanggal: "16 Jul 2026", omset: "Rp 53.940", pendapatan: "Rp 0", pengeluaran: "Rp 0", labaRugi: "Rp 0" },
  { tanggal: "6 Jul 2026", omset: "Rp 10.000", pendapatan: "Rp 0", pengeluaran: "Rp 0", labaRugi: "Rp 0" },
  { tanggal: "2 Jul 2026", omset: "Rp 27.000", pendapatan: "Rp 20.000", pengeluaran: "Rp 10.000", labaRugi: "Rp 10.000" },
];

const paymentMethods: BreakdownItem[] = [
  { label: "BCA - Transfer", amount: "Rp 10.000", percent: 100 },
  { label: "QRIS", amount: "Rp 10.000", percent: 100 },
];

const expenseCategories: BreakdownItem[] = [{ label: "Sabun & Pewangi", amount: "Rp 10.000", percent: 100 }];

export default function LaporanLabaRugiPage() {
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
            Laporan Laba &amp; Rugi
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: adminColors.textMuted,
              margin: 0,
            }}
          >
            Ringkasan laba rugi per periode.
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
            <WatermarkLinkIcon />
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
            <LinkIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Total Omset
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>Rp 0</div>
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
            <WatermarkWalletIcon />
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
            <WalletIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Total Pendapatan
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>
            Rp 20.000
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
            <WatermarkTrendIcon />
          </div>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: adminRadii.sm,
              backgroundColor: localColors.iconGreenBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <TrendUpIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Laba / Rugi
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
            Total Transaksi
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.ink }}>2</div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
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
            <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
              Rincian Harian
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
                    textAlign: "right",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    color: adminColors.textMuted,
                    padding: "12px 14px",
                    textTransform: "uppercase",
                  }}
                >
                  Omset
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
                  Pendapatan
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
                  Pengeluaran
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
                  Laba/Rugi
                </th>
              </tr>
            </thead>
            <tbody>
              {dailyRows.map((row) => (
                <tr key={row.tanggal} style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.tanggal}
                  </td>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      color: adminColors.orange,
                      textAlign: "right",
                    }}
                  >
                    {row.omset}
                  </td>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      color: adminColors.orange,
                      textAlign: "right",
                    }}
                  >
                    {row.pendapatan}
                  </td>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      color: adminColors.orange,
                      textAlign: "right",
                    }}
                  >
                    {row.pengeluaran}
                  </td>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: localColors.iconGreen,
                      textAlign: "right",
                    }}
                  >
                    {row.labaRugi}
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
              <CardIcon size={18} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
              Metode Pembayaran
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {paymentMethods.map((method) => (
              <div key={method.label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: adminColors.ink }}>
                    {method.label}
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: adminColors.orange }}>
                    {method.amount}
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
                      width: `${method.percent}%`,
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
              <ShoppingBagIcon size={18} color={adminColors.orange} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
              Kategori Pengeluaran
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {expenseCategories.map((category) => (
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