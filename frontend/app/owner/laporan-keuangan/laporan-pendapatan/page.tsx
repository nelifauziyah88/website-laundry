"use client";

import { useState } from "react";
import { adminColors, adminRadii } from "../../adminTheme";
import { ChevronDownIcon } from "../../components/Icons";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  iconBlueBg: "#E7F0FC",
  iconBlue: "#3B82F6",
  iconPeachBg: "#FDECE2",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
  progressTrack: "#FBE4D8",
};

type LinkIconProps = { size?: number; color?: string };

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

function WatermarkWalletIcon({ size = 130, color = localColors.iconBlue }: LinkIconProps) {
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

type DailyRow = {
  tanggal: string;
  total: string;
};

type PaymentMethod = {
  label: string;
  amount: string;
  percent: number;
};

const dailyRows: DailyRow[] = [{ tanggal: "2 Jul 2026", total: "Rp 20.000" }];

const paymentMethods: PaymentMethod[] = [
  { label: "BCA - Transfer", amount: "Rp 10.000", percent: 100 },
  { label: "QRIS", amount: "Rp 10.000", percent: 100 },
];

export default function LaporanPendapatanPage() {
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
            Laporan Pendapatan
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: adminColors.textMuted,
              margin: 0,
            }}
          >
            Rincian uang masuk per metode pembayaran untuk bulan &amp; outlet yang dipilih di bawah.
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
          <div
            style={{
              position: "absolute",
              bottom: -30,
              right: -20,
            }}
          >
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
          <div
            style={{
              fontSize: 14,
              color: adminColors.textMuted,
              marginBottom: 6,
            }}
          >
            Total Pendapatan
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: adminColors.orange,
            }}
          >
            Rp 20.000
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 20,
            }}
          >
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
            <div
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: adminColors.ink,
              }}
            >
              Rincian Harian
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
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
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {dailyRows.map((row) => (
                <tr
                  key={row.tanggal}
                  style={{
                    borderBottom: `1px solid ${localColors.tableRowBorder}`,
                  }}
                >
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: adminColors.textBody,
                    }}
                  >
                    {row.tanggal}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
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
            <div
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: adminColors.ink,
              }}
            >
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
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: adminColors.ink,
                    }}
                  >
                    {method.label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: adminColors.orange,
                    }}
                  >
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
      </div>
    </div>
  );
}