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
  statusOrderBg: "#F1EFEA",
  statusOrderText: "#6B6560",
  statusBelumLunasBg: "#FDECC8",
  statusBelumLunasText: "#B9812E",
  statusLunasBg: "#E3F7EA",
  statusLunasText: "#3FA45E",
  pageBtnBorder: "#EDE8E2",
  pageBtnText: "#9A948D",
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

function DocumentIcon({ size = 20, color = adminColors.orange }: LinkIconProps) {
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
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
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

function WatermarkReceiptIcon({ size = 120, color = localColors.iconBlue }: LinkIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.12}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth={1.4} />
      <path d="M2 9h20" stroke={color} strokeWidth={1.4} />
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

type TransaksiRow = {
  nomorNota: string;
  pelanggan: string;
  tanggal: string;
  statusOrder: string;
  statusBayar: "Belum Lunas" | "Lunas";
  metode: string;
  kasir: string;
  total: string;
};

const transaksiRows: TransaksiRow[] = [
  {
    nomorNota: "TRX/3.001/202607160001",
    pelanggan: "sonia",
    tanggal: "16 Jul 2026",
    statusOrder: "Antrian",
    statusBayar: "Belum Lunas",
    metode: "-",
    kasir: "Bobyrianto Nainggolan",
    total: "Rp 53.940",
  },
  {
    nomorNota: "TRX/3.001/202607060001",
    pelanggan: "Babe 2",
    tanggal: "6 Jul 2026",
    statusOrder: "Antrian",
    statusBayar: "Belum Lunas",
    metode: "-",
    kasir: "Bobyrianto Nainggolan",
    total: "Rp 10.000",
  },
  {
    nomorNota: "TRX/3.001/202607020003",
    pelanggan: "Media Ayo Cuci",
    tanggal: "2 Jul 2026",
    statusOrder: "Antrian",
    statusBayar: "Belum Lunas",
    metode: "QRIS",
    kasir: "Bobyrianto Nainggolan",
    total: "Rp 11.000",
  },
  {
    nomorNota: "TRX/3.001/202607020002",
    pelanggan: "sonia",
    tanggal: "2 Jul 2026",
    statusOrder: "Antrian",
    statusBayar: "Lunas",
    metode: "BCA - Transfer",
    kasir: "Bobyrianto Nainggolan",
    total: "Rp 10.000",
  },
  {
    nomorNota: "TRX/3.001/202607020001",
    pelanggan: "sonia",
    tanggal: "2 Jul 2026",
    statusOrder: "Antrian",
    statusBayar: "Belum Lunas",
    metode: "-",
    kasir: "Bobyrianto Nainggolan",
    total: "Rp 6.000",
  },
];

function StatusOrderBadge({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12.5,
        fontWeight: 500,
        padding: "4px 12px",
        borderRadius: adminRadii.pill,
        backgroundColor: localColors.statusOrderBg,
        color: localColors.statusOrderText,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

function StatusBayarBadge({ status }: { status: "Belum Lunas" | "Lunas" }) {
  const isLunas = status === "Lunas";
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "4px 12px",
        borderRadius: adminRadii.pill,
        backgroundColor: isLunas ? localColors.statusLunasBg : localColors.statusBelumLunasBg,
        color: isLunas ? localColors.statusLunasText : localColors.statusBelumLunasText,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

export default function SemuaTransaksiPage() {
  const [bulan, setBulan] = useState("Juli");
  const [tahun, setTahun] = useState("2026");
  const [outlet, setOutlet] = useState("Cece Laundry");
  const [search, setSearch] = useState("");
  const [statusOrder, setStatusOrder] = useState("Semua Status Order");
  const [statusBayar, setStatusBayar] = useState("Semua Status Bayar");

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
            Semua Transaksi
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: adminColors.textMuted,
              margin: 0,
            }}
          >
            Daftar transaksi untuk bulan &amp; outlet yang dipilih di bawah.
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
          gap: 12,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: localColors.cardBg,
            border: `1px solid ${localColors.cardBorder}`,
            borderRadius: adminRadii.sm,
            padding: "14px 18px",
            flex: "1 1 320px",
          }}
        >
          <SearchIcon />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nomor nota / nama pelanggan"
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
            display: "flex",
            alignItems: "center",
            gap: 10,
            backgroundColor: localColors.cardBg,
            border: `1px solid ${localColors.cardBorder}`,
            borderRadius: adminRadii.sm,
            padding: "12px 16px",
          }}
        >
          <select
            value={statusOrder}
            onChange={(e) => setStatusOrder(e.target.value)}
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
            <option>Semua Status Order</option>
            <option>Antrian</option>
            <option>Diproses</option>
            <option>Siap Diambil</option>
            <option>Selesai</option>
            <option>Batal</option>
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
            padding: "12px 16px",
          }}
        >
          <select
            value={statusBayar}
            onChange={(e) => setStatusBayar(e.target.value)}
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
            <option>Semua Status Bayar</option>
            <option>Lunas</option>
            <option>Belum Lunas</option>
          </select>
          <ChevronDownIcon size={14} color={adminColors.textMuted} />
        </div>
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
            Rp 90.940
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
          <div style={{ fontSize: 30, fontWeight: 600, color: adminColors.ink }}>5</div>
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
            <DocumentIcon size={18} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
              Daftar Transaksi
            </div>
            <div style={{ fontSize: 13, color: adminColors.textMuted }}>
              {transaksiRows.length} transaksi di bulan ini.
            </div>
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
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
                    whiteSpace: "nowrap",
                  }}
                >
                  Nomor Nota
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
                  Status Order
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
                  Status Bayar
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
                  Metode
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
              </tr>
            </thead>
            <tbody>
              {transaksiRows.map((row) => (
                <tr key={row.nomorNota} style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}>
                  <td
                    style={{
                      padding: "16px 14px",
                      fontSize: 14,
                      fontWeight: 500,
                      color: adminColors.ink,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.nomorNota}
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.pelanggan}
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.tanggal}
                  </td>
                  <td style={{ padding: "16px 14px" }}>
                    <StatusOrderBadge text={row.statusOrder} />
                  </td>
                  <td style={{ padding: "16px 14px" }}>
                    <StatusBayarBadge status={row.statusBayar} />
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.metode}
                  </td>
                  <td style={{ padding: "16px 14px", fontSize: 14, color: adminColors.textBody }}>
                    {row.kasir}
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
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            paddingTop: 20,
            borderTop: `1px solid ${localColors.tableRowBorder}`,
          }}
        >
          <span style={{ fontSize: 13.5, color: adminColors.textMuted }}>Halaman 1</span>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              disabled
              style={{
                border: `1px solid ${localColors.pageBtnBorder}`,
                backgroundColor: "transparent",
                color: localColors.pageBtnText,
                fontSize: 13.5,
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: adminRadii.sm,
                cursor: "not-allowed",
              }}
            >
              Sebelumnya
            </button>
            <button
              disabled
              style={{
                border: `1px solid ${localColors.pageBtnBorder}`,
                backgroundColor: "transparent",
                color: localColors.pageBtnText,
                fontSize: 13.5,
                fontWeight: 500,
                padding: "8px 16px",
                borderRadius: adminRadii.sm,
                cursor: "not-allowed",
              }}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}