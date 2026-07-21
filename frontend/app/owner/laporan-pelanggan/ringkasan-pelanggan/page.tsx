"use client";

import { useMemo, useState } from "react";
import { adminColors, adminRadii } from "../../adminTheme";
import { ChevronDownIcon } from "../../components/Icons";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  iconPeachBg: "#FDECE2",
  iconBlueBg: "#E7F0FC",
  iconBlue: "#3B82F6",
  iconPurpleBg: "#F1EBFC",
  iconPurple: "#8B5CF6",
  iconGreenBg: "#E4F7EE",
  iconGreen: "#22C55E",
  tableHeaderBg: "#FAF8F6",
  tableRowBorder: "#F1ECE7",
  tabTrack: "#F4F1EC",
  rankBg: "#FDECE2",
  searchBorder: "#EDE8E2",
};

type IconProps = { size?: number; color?: string };

function UserIcon({ size = 20, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}

function UserPlusIcon({ size = 20, color = localColors.iconBlue }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="4" />
      <path d="M2 20c0-4.4 3.1-7 7-7s7 2.6 7 7" />
      <path d="M19 8v6" />
      <path d="M16 11h6" />
    </svg>
  );
}

function UsersIcon({ size = 20, color = localColors.iconPurple }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M2.5 20c0-3.6 2.7-6 5.5-6s5.5 2.4 5.5 6" />
      <path d="M14.5 14.4c2.4.2 4.5 2.3 4.5 5.6" />
    </svg>
  );
}

function ShoppingBagIcon({ size = 20, color = localColors.iconGreen }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function LinkIcon({ size = 20, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function StarIcon({ size = 18, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
    </svg>
  );
}

function SearchIcon({ size = 16, color = adminColors.textMuted }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.2-3.2" />
    </svg>
  );
}

function WatermarkUserIcon({ size = 110, color = adminColors.orange }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={0.08}>
      <circle cx="12" cy="9" r="4" stroke={color} strokeWidth={1.4} />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

type Pelanggan = {
  nama: string;
  noHp: string;
  totalOrder: number;
  totalNominal: number;
};

type PeriodFilter = "mingguan" | "bulanan" | "tahunan" | "custom";

const outlets = ["Cece Laundry", "Bintang Laundry", "Ayo Cuci Sejahtera"];

const daftarPelanggan: Pelanggan[] = [
  { nama: "sonia", noHp: "081363323847", totalOrder: 4, totalNominal: 165940 },
  { nama: "bob", noHp: "081266022918", totalOrder: 1, totalNominal: 65000 },
  { nama: "Media Ayo Cuci", noHp: "08136883187", totalOrder: 1, totalNominal: 11000 },
  { nama: "Babe 2", noHp: "081365492740", totalOrder: 1, totalNominal: 10000 },
  { nama: "Bob Nainggolan", noHp: "081248118613", totalOrder: 0, totalNominal: 0 },
  { nama: "Cek Bonus", noHp: "0889", totalOrder: 0, totalNominal: 0 },
  { nama: "Cek Nomor", noHp: "0808", totalOrder: 0, totalNominal: 0 },
  { nama: "Cek Pulsa", noHp: "0888", totalOrder: 0, totalNominal: 0 },
  { nama: "Contact Center", noHp: "188", totalOrder: 0, totalNominal: 0 },
  { nama: "Data Transaksi", noHp: "0887", totalOrder: 0, totalNominal: 0 },
  { nama: "NSP1212", noHp: "1212", totalOrder: 0, totalNominal: 0 },
  { nama: "TELKOMSEL", noHp: "0111", totalOrder: 0, totalNominal: 0 },
];

const periodTabs: { key: PeriodFilter; label: string }[] = [
  { key: "mingguan", label: "Mingguan" },
  { key: "bulanan", label: "Bulanan" },
  { key: "tahunan", label: "Tahunan" },
  { key: "custom", label: "Custom" },
];

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

export default function LaporanPelangganPage() {
  const [period, setPeriod] = useState<PeriodFilter>("bulanan");
  const [outlet, setOutlet] = useState(outlets[0]);
  const [search, setSearch] = useState("");

  const totalPelanggan = daftarPelanggan.length;
  const pelangganBaru = 10;
  const lakiPerempuan = { laki: 1, perempuan: 1 };
  const totalOrder = daftarPelanggan.reduce((acc, p) => acc + p.totalOrder, 0);
  const nilaiTransaksi = daftarPelanggan.reduce((acc, p) => acc + p.totalNominal, 0);

  const topPelanggan = useMemo(
    () => [...daftarPelanggan].sort((a, b) => b.totalNominal - a.totalNominal).slice(0, 5),
    []
  );

  const filteredPelanggan = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return daftarPelanggan;
    return daftarPelanggan.filter(
      (p) => p.nama.toLowerCase().includes(query) || p.noHp.includes(query)
    );
  }, [search]);

  const statCards = [
    {
      label: "Total Pelanggan",
      value: String(totalPelanggan),
      icon: <UserIcon />,
      bg: localColors.iconPeachBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Pelanggan Baru",
      value: String(pelangganBaru),
      icon: <UserPlusIcon />,
      bg: localColors.iconBlueBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Laki-laki / Perempuan",
      value: `${lakiPerempuan.laki} / ${lakiPerempuan.perempuan}`,
      icon: <UsersIcon />,
      bg: localColors.iconPurpleBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Total Order",
      value: String(totalOrder),
      icon: <ShoppingBagIcon />,
      bg: localColors.iconGreenBg,
      valueColor: adminColors.ink,
    },
    {
      label: "Nilai Transaksi",
      value: formatRupiah(nilaiTransaksi),
      icon: <LinkIcon />,
      bg: localColors.iconPeachBg,
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
            Ringkasan Pelanggan
          </h2>
          <p style={{ fontSize: 14.5, color: adminColors.textMuted, margin: 0 }}>
            Daftar pelanggan, nilai transaksinya, &amp; pelanggan top.
          </p>
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

      <div
        style={{
          display: "inline-flex",
          backgroundColor: adminColors.white,
          borderRadius: 999,
          padding: 6,
          marginBottom: 24,
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        {periodTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setPeriod(tab.key)}
            style={{
              border: "none",
              outline: "none",
              cursor: "pointer",
              borderRadius: 999,
              padding: "9px 20px",
              fontSize: 14,
              fontWeight: 500,
              backgroundColor: period === tab.key ? adminColors.orange : "transparent",
              color: period === tab.key ? adminColors.white : adminColors.textMuted,
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(160px, 1fr))",
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
              padding: 20,
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", bottom: -26, right: -16 }}>
              <WatermarkUserIcon />
            </div>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: adminRadii.sm,
                backgroundColor: card.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              {card.icon}
            </div>
            <div style={{ fontSize: 13, color: adminColors.textMuted, marginBottom: 6 }}>
              {card.label}
            </div>
            <div style={{ fontSize: 24, fontWeight: 500, color: card.valueColor }}>
              {card.value}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
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
              <StarIcon size={17} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
                Top Pelanggan
              </div>
              <div style={{ fontSize: 13, color: adminColors.textMuted }}>
                5 pelanggan dengan nilai transaksi tertinggi.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {topPelanggan.map((p, index) => (
              <div
                key={p.nama}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: `1px solid ${localColors.tableRowBorder}`,
                  borderRadius: adminRadii.sm,
                  padding: "12px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      backgroundColor: localColors.rankBg,
                      color: adminColors.orange,
                      fontSize: 13,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <div style={{ fontSize: 14.5, fontWeight: 500, color: adminColors.ink }}>
                      {p.nama}
                    </div>
                    <div style={{ fontSize: 12.5, color: adminColors.textMuted }}>
                      {p.noHp} · {p.totalOrder} order
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: 14.5, fontWeight: 500, color: adminColors.orange }}>
                  {formatRupiah(p.totalNominal)}
                </span>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                <UsersIcon size={17} color={adminColors.orange} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: adminColors.ink }}>
                  Daftar Pelanggan
                </div>
                <div style={{ fontSize: 13, color: adminColors.textMuted }}>
                  {daftarPelanggan.length} pelanggan terdaftar.
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `1px solid ${localColors.searchBorder}`,
                borderRadius: adminRadii.sm,
                padding: "8px 12px",
                width: 180,
              }}
            >
              <SearchIcon />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama / no. HP"
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: 13.5,
                  color: adminColors.ink,
                  width: "100%",
                }}
              />
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 460 }}>
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
                      textAlign: "right",
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: 0.5,
                      color: adminColors.textMuted,
                      padding: "12px 14px",
                      textTransform: "uppercase",
                    }}
                  >
                    Total Order
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
                    Total Nominal
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPelanggan.map((p) => (
                  <tr key={p.nama} style={{ borderBottom: `1px solid ${localColors.tableRowBorder}` }}>
                    <td style={{ padding: "14px", fontSize: 14, fontWeight: 500, color: adminColors.ink }}>
                      {p.nama}
                    </td>
                    <td style={{ padding: "14px", fontSize: 14, color: adminColors.textMuted }}>
                      {p.noHp}
                    </td>
                    <td style={{ padding: "14px", fontSize: 14, color: adminColors.textBody, textAlign: "right" }}>
                      {p.totalOrder}
                    </td>
                    <td style={{ padding: "14px", fontSize: 14, fontWeight: 500, color: adminColors.orange, textAlign: "right" }}>
                      {formatRupiah(p.totalNominal)}
                    </td>
                  </tr>
                ))}
                {filteredPelanggan.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ padding: "20px 14px", textAlign: "center", color: adminColors.textMuted }}>
                      Tidak ada pelanggan yang cocok.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}