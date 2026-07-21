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
  iconGreenBg: "#E3F7EA",
  iconGreen: "#3FA45E",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
  categoryBadgeBg: "#F1EFEA",
  categoryBadgeText: "#6B6560",
  unitPillDot: adminColors.orange,
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

function ShoppingBagIcon({ size = 20, color = localColors.iconBlue }: LinkIconProps) {
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

function CheckListIcon({ size = 20, color = localColors.iconGreen }: LinkIconProps) {
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
      <path d="m3 7 2 2 3-3" />
      <path d="M10 7h11" />
      <path d="m3 15 2 2 3-3" />
      <path d="M10 15h11" />
    </svg>
  );
}

function WatermarkLinkIcon({ size = 130, color = adminColors.orange }: LinkIconProps) {
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

function WatermarkBagIcon({ size = 120, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.1}>
      <path d="M6 8h12l-1 12H7L6 8Z" stroke={color} strokeWidth={1.4} />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={color} strokeWidth={1.4} />
    </svg>
  );
}

function WatermarkCheckListIcon({ size = 120, color = localColors.iconGreen }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.12}>
      <path d="m3 7 2 2 3-3" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 7h11" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
      <path d="m3 15 2 2 3-3" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 15h11" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
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

type ServiceRow = {
  layanan: string;
  kategori: string;
  totalPesanan: number;
  totalQty: string;
  totalHarga: string;
};

type UnitSummary = {
  label: string;
  value: string;
};

const unitSummaries: UnitSummary[] = [
  { label: "Kilogram", value: "10.99" },
  { label: "Meter", value: "1.96" },
  { label: "Pieces", value: "1" },
];

const serviceRows: ServiceRow[] = [
  { layanan: "Cuci Kiloan Reguler", kategori: "Cuci Kiloan", totalPesanan: 2, totalQty: "9.99 kg", totalHarga: "Rp 59.940" },
  { layanan: "Karpet Biasa", kategori: "Karpet", totalPesanan: 1, totalQty: "1.96 m", totalHarga: "Rp 11.760" },
  { layanan: "Cuci Kiloan Ekspres", kategori: "Cuci Kiloan", totalPesanan: 1, totalQty: "1 kg", totalHarga: "Rp 10.000" },
  { layanan: "Bedcover Singel", kategori: "Bedcover", totalPesanan: 1, totalQty: "1 pcs", totalHarga: "Rp 10.000" },
];

function CategoryBadge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12.5,
        fontWeight: 500,
        padding: "4px 12px",
        borderRadius: adminRadii.pill,
        backgroundColor: localColors.categoryBadgeBg,
        color: localColors.categoryBadgeText,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

export default function RingkasanPerLayananPage() {
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
              Laporan Transaksi
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
            Ringkasan per Layanan
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: adminColors.textMuted,
              margin: 0,
            }}
          >
            Rincian transaksi per jenis layanan untuk bulan &amp; outlet yang dipilih di bawah.
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
          <div style={{ position: "absolute", bottom: -30, right: -20 }}>
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
            Total Pendapatan
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.orange }}>
            Rp 91.700
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
              backgroundColor: localColors.iconBlueBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <ShoppingBagIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Total Pesanan
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.ink }}>5</div>
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
            <WatermarkCheckListIcon />
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
            <CheckListIcon />
          </div>
          <div style={{ fontSize: 14, color: adminColors.textMuted, marginBottom: 6 }}>
            Jenis Layanan
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.ink }}>4</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
        {unitSummaries.map((unit) => (
          <div
            key={unit.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              backgroundColor: localColors.cardBg,
              border: `1px solid ${localColors.cardBorder}`,
              borderRadius: adminRadii.pill,
              padding: "10px 18px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: localColors.unitPillDot,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 14, color: adminColors.textMuted }}>{unit.label}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: adminColors.ink }}>{unit.value}</span>
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
            <CheckListIcon size={18} color={adminColors.orange} />
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
            Rincian per Layanan
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720 }}>
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
                  Layanan
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
                  Kategori
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
                  Total Pesanan
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
                  Total Qty
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
                  Total Harga
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceRows.map((row, index) => (
                <tr
                  key={row.layanan}
                  style={{
                    borderBottom:
                      index === serviceRows.length - 1 ? "none" : `1px solid ${localColors.tableRowBorder}`,
                  }}
                >
                  <td style={{ padding: "16px 14px", fontSize: 14, fontWeight: 600, color: adminColors.ink }}>
                    {row.layanan}
                  </td>
                  <td style={{ padding: "16px 14px" }}>
                    <CategoryBadge text={row.kategori} />
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.totalPesanan}
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.totalQty}
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
                    {row.totalHarga}
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