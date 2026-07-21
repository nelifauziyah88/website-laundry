"use client";

import { useState } from "react";
import { adminColors, adminRadii, adminShadows } from "../adminTheme";
import {
  LinkChainIcon,
  WalletIcon,
  ShoppingBagIcon,
  PiggyBankIcon,
  ReceiptIcon,
  CardStackIcon,
  BoxIcon,
  UserPlusIcon,
  TrendUpIcon,
  SparkleIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "../components/Icons";

type IconComponent = (props: { size?: number; color?: string }) => React.ReactNode;

type BadgeStyle = "pill-up" | "pill-down" | "text-up" | "none";

type StatCard = {
  label: string;
  value: string;
  valueColor: string;
  badge: string;
  badgeStyle: BadgeStyle;
  icon: IconComponent;
  iconBg: string;
  iconColor: string;
  featured?: boolean;
};

const primaryStats: StatCard[] = [
  {
    label: "Omzet",
    value: "Rp 90.940",
    valueColor: adminColors.white,
    badge: "-43.5% dari periode lalu",
    badgeStyle: "none",
    icon: LinkChainIcon,
    iconBg: "rgba(255,255,255,0.25)",
    iconColor: adminColors.white,
    featured: true,
  },
  {
    label: "Uang Masuk",
    value: "Rp 20.000",
    valueColor: adminColors.orangeDeep,
    badge: "-87.6%",
    badgeStyle: "pill-down",
    icon: WalletIcon,
    iconBg: "#E1F5EA",
    iconColor: "#5FAE85",
  },
  {
    label: "Pengeluaran",
    value: "Rp 10.000",
    valueColor: adminColors.orangeDeep,
    badge: "+100.0%",
    badgeStyle: "pill-up",
    icon: ShoppingBagIcon,
    iconBg: "#EEE9FC",
    iconColor: "#9B90D9",
  },
  {
    label: "Laba Bersih",
    value: "Rp 10.000",
    valueColor: adminColors.orangeDeep,
    badge: "Margin 11.0%",
    badgeStyle: "text-up",
    icon: PiggyBankIcon,
    iconBg: "#FBE7EC",
    iconColor: "#D98CA0",
  },
];

const secondaryStats: StatCard[] = [
  {
    label: "Total Transaksi",
    value: "5",
    valueColor: adminColors.ink,
    badge: "+150.0%",
    badgeStyle: "pill-up",
    icon: ReceiptIcon,
    iconBg: "#FDEEE3",
    iconColor: adminColors.orangeDeep,
  },
  {
    label: "Rata-rata Transaksi",
    value: "Rp 18.188",
    valueColor: adminColors.ink,
    badge: "",
    badgeStyle: "none",
    icon: CardStackIcon,
    iconBg: "#E7F1FE",
    iconColor: "#6FA0E8",
  },
  {
    label: "Piutang Belum Lunas",
    value: "Rp 0",
    valueColor: adminColors.orangeDeep,
    badge: "",
    badgeStyle: "none",
    icon: BoxIcon,
    iconBg: "#EEE9FC",
    iconColor: "#9B90D9",
  },
  {
    label: "Pelanggan Baru",
    value: "10",
    valueColor: adminColors.ink,
    badge: "",
    badgeStyle: "none",
    icon: UserPlusIcon,
    iconBg: "#E3F7EA",
    iconColor: "#5CAE7A",
  },
];

const orderStatuses = [
  { label: "Antrian", value: 5, showDot: false, valueColor: "#6FA0E8" },
  { label: "Diproses", value: 0, showDot: true, dotColor: adminColors.orangeDeep, valueColor: adminColors.orangeDeep },
  { label: "Siap Diambil", value: 0, showDot: true, dotColor: "#DB8177", valueColor: "#DB8177" },
  { label: "Selesai", value: 0, showDot: false, valueColor: adminColors.success },
  { label: "Batal", value: 0, showDot: false, valueColor: adminColors.ink },
];

const trendTabs = ["Semua", "Uang Masuk", "Omset", "Pengeluaran"] as const;

const trendPoints = [
  { label: "2", value: 27000 },
  { label: "4", value: 13000 },
  { label: "1", value: 54000 },
];

const volumeBars = [
  { label: "Kam", value: 3, tone: "strong" as const },
  { label: "Sen", value: 1, tone: "soft" as const },
  { label: "Kam", value: 1, tone: "strong" as const },
];

const outletPerformance = [
  { rank: 1, name: "Cece Laundry", omzet: "Rp 90.940", transaksi: 5, growth: "-43.5%", growthUp: false },
  { rank: 2, name: "Cece Laundry 2", omzet: "Rp 0", transaksi: 0, growth: "0.0%", growthUp: true },
];

const topServices = [
  { label: "Cuci Kiloan Reguler", percent: 65 },
  { label: "Karpet Biasa", percent: 13 },
  { label: "Cuci Kiloan Ekspres", percent: 11 },
  { label: "Bedcover Singel", percent: 11 },
];

function Badge({ text, style }: { text: string; style: BadgeStyle }) {
  if (!text || style === "none") return null;
  if (style === "text-up") {
    return (
      <span style={{ fontSize: 13, fontWeight: 600, color: adminColors.success }}>{text}</span>
    );
  }
  const isUp = style === "pill-up";
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "4px 10px",
        borderRadius: adminRadii.pill,
        backgroundColor: isUp ? adminColors.successBg : "#FDEDE7",
        color: isUp ? adminColors.success : "#D98F6E",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

function FeaturedBadge({ text }: { text: string }) {
  if (!text) return null;
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 12.5,
        fontWeight: 600,
        padding: "4px 10px",
        borderRadius: adminRadii.pill,
        backgroundColor: "rgba(255,255,255,0.25)",
        color: adminColors.white,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

function StatCardView({ stat }: { stat: StatCard }) {
  const Icon = stat.icon;
  const featured = Boolean(stat.featured);
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: featured ? adminColors.orange : adminColors.white,
        border: featured ? "none" : `1px solid ${adminColors.cardBorder}`,
        borderRadius: adminRadii.card,
        boxShadow: adminShadows.card,
        padding: 22,
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -14,
          bottom: -14,
          opacity: featured ? 0.14 : 0.08,
          color: featured ? adminColors.white : stat.iconColor,
        }}
      >
        <Icon size={92} color="currentColor" />
      </div>

      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: adminRadii.sm,
            backgroundColor: stat.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} color={stat.iconColor} />
        </div>
        {featured ? <FeaturedBadge text={stat.badge} /> : <Badge text={stat.badge} style={stat.badgeStyle} />}
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: featured ? "rgba(255,255,255,0.85)" : adminColors.textMuted,
            marginBottom: 6,
          }}
        >
          {stat.label}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: stat.valueColor,
          }}
        >
          {stat.value}
        </div>
      </div>
    </div>
  );
}

function TrendChart() {
  const [activeTab, setActiveTab] = useState<(typeof trendTabs)[number]>("Semua");
  const width = 640;
  const height = 220;
  const paddingLeft = 44;
  const paddingBottom = 24;
  const maxValue = 54000;
  const gridValues = [0, 13000, 27000, 40000, 54000];

  const xStep = (width - paddingLeft - 16) / (trendPoints.length - 1);
  const coords = trendPoints.map((point, index) => {
    const x = paddingLeft + index * xStep;
    const y = height - paddingBottom - (point.value / maxValue) * (height - paddingBottom - 16);
    return { x, y };
  });
  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1].x},${height - paddingBottom} L${coords[0].x},${
    height - paddingBottom
  } Z`;

  return (
    <div
      style={{
        backgroundColor: adminColors.white,
        border: `1px solid ${adminColors.cardBorder}`,
        borderRadius: adminRadii.card,
        boxShadow: adminShadows.card,
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: adminRadii.sm,
              backgroundColor: adminColors.orangeSoft,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TrendUpIcon size={18} color={adminColors.orangeDeep} />
          </div>
          <span style={{ fontSize: 16, fontWeight: 600, color: adminColors.ink }}>Tren Bisnis</span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {trendTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: adminRadii.pill,
                backgroundColor: activeTab === tab ? adminColors.orange : "transparent",
                color: activeTab === tab ? adminColors.white : adminColors.textMuted,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: "100%", height: "auto" }}>
        {gridValues.map((value) => {
          const y = height - paddingBottom - (value / maxValue) * (height - paddingBottom - 16);
          return (
            <g key={value}>
              <line x1={paddingLeft} y1={y} x2={width - 8} y2={y} stroke={adminColors.cardBorder} strokeWidth={1} />
              <text x={0} y={y + 4} fontSize={10} fill={adminColors.textMuted}>
                {value === 0 ? "0" : `${value / 1000}rb`}
              </text>
            </g>
          );
        })}
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={adminColors.orange} stopOpacity={0.25} />
            <stop offset="100%" stopColor={adminColors.orange} stopOpacity={0} />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#trendFill)" />
        <path d={linePath} fill="none" stroke={adminColors.orange} strokeWidth={2.5} />
        {coords.map((c, index) => (
          <circle key={index} cx={c.x} cy={c.y} r={4} fill={adminColors.white} stroke={adminColors.orange} strokeWidth={2.5} />
        ))}
        {trendPoints.map((point, index) => (
          <text key={point.label} x={coords[index].x} y={height - 4} fontSize={10} fill={adminColors.textMuted} textAnchor="middle">
            {point.label}
          </text>
        ))}
      </svg>

      <div style={{ display: "flex", gap: 20, marginTop: 12 }}>
        <LegendDot color={adminColors.chartOmzet} label="Omset" />
        <LegendDot color={adminColors.chartUangMasuk} label="Uang Masuk" />
        <LegendDot color={adminColors.chartPengeluaran} label="Pengeluaran" />
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: color, display: "inline-block" }} />
      <span style={{ fontSize: 13, color: adminColors.textBody }}>{label}</span>
    </div>
  );
}

function VolumeChart() {
  const maxValue = Math.max(...volumeBars.map((bar) => bar.value));
  return (
    <div
      style={{
        backgroundColor: adminColors.white,
        border: `1px solid ${adminColors.cardBorder}`,
        borderRadius: adminRadii.card,
        boxShadow: adminShadows.card,
        padding: 24,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: adminRadii.sm,
            backgroundColor: adminColors.orangeSoft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReceiptIcon size={18} color={adminColors.orangeDeep} />
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, color: adminColors.ink }}>Volume Transaksi</span>
      </div>
      <div style={{ fontSize: 13, color: adminColors.textMuted, marginBottom: 24 }}>7 hari terakhir.</div>

      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-around", gap: 16 }}>
        {volumeBars.map((bar, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: adminColors.ink }}>{bar.value}</span>
            <div
              style={{
                width: 34,
                height: Math.max(18, (bar.value / maxValue) * 110),
                borderRadius: 6,
                backgroundColor: bar.tone === "strong" ? adminColors.orange : adminColors.orangeSoft,
              }}
            />
            <span style={{ fontSize: 12, color: adminColors.textMuted }}>{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OutletPerformance() {
  return (
    <div
      style={{
        backgroundColor: adminColors.white,
        border: `1px solid ${adminColors.cardBorder}`,
        borderRadius: adminRadii.card,
        boxShadow: adminShadows.card,
        padding: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: adminRadii.sm,
            backgroundColor: adminColors.orangeSoft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SparkleIcon size={18} color={adminColors.orangeDeep} />
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, color: adminColors.ink }}>Performa Outlet</span>
      </div>
      <div style={{ fontSize: 13, color: adminColors.textMuted, marginBottom: 20 }}>
        Dibandingkan berdasarkan omzet bulan ini.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", fontSize: 12, fontWeight: 600, color: adminColors.textMuted, paddingBottom: 12, borderBottom: `1px solid ${adminColors.cardBorder}` }}>
        <span>NAMA OUTLET</span>
        <span>OMZET</span>
        <span>TRANSAKSI</span>
        <span>PERTUMBUHAN</span>
      </div>

      {outletPerformance.map((outlet) => (
        <div
          key={outlet.rank}
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            alignItems: "center",
            fontSize: 14,
            color: adminColors.ink,
            padding: "16px 0",
            borderBottom: `1px solid ${adminColors.cardBorder}`,
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600 }}>
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: adminColors.orangeSoft,
                color: adminColors.orangeDeep,
                fontSize: 12,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {outlet.rank}
            </span>
            {outlet.name}
          </span>
          <span>{outlet.omzet}</span>
          <span>{outlet.transaksi}</span>
          <span>
            <Badge text={outlet.growth} style={outlet.growthUp ? "pill-up" : "pill-down"} />
          </span>
        </div>
      ))}
    </div>
  );
}

function TopServices() {
  return (
    <div
      style={{
        backgroundColor: adminColors.white,
        border: `1px solid ${adminColors.cardBorder}`,
        borderRadius: adminRadii.card,
        boxShadow: adminShadows.card,
        padding: 24,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: adminRadii.sm,
            backgroundColor: adminColors.orangeSoft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SparkleIcon size={18} color={adminColors.orangeDeep} />
        </div>
        <span style={{ fontSize: 16, fontWeight: 600, color: adminColors.ink }}>Layanan Terlaris</span>
      </div>
      <div style={{ fontSize: 13, color: adminColors.textMuted, marginBottom: 24 }}>
        Berdasarkan omzet per layanan bulan ini.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {topServices.map((service) => (
          <div key={service.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: adminColors.ink }}>{service.label}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: adminColors.ink }}>{service.percent}%</span>
            </div>
            <div style={{ height: 8, borderRadius: adminRadii.pill, backgroundColor: adminColors.neutralBg }}>
              <div
                style={{
                  height: "100%",
                  width: `${service.percent}%`,
                  borderRadius: adminRadii.pill,
                  backgroundColor: adminColors.orange,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlainSelect({ defaultValue, options }: { defaultValue: string; options: string[] }) {
  return (
    <select
      defaultValue={defaultValue}
      style={{
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        fontSize: 14,
        fontWeight: 600,
        color: adminColors.ink,
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        cursor: "pointer",
        paddingRight: 2,
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function FiltersRow() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: adminColors.orange, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: adminColors.orange, display: "inline-block" }} />
          RINGKASAN BISNIS
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: adminColors.ink, margin: 0 }}>Selamat Datang</h2>
        <p style={{ fontSize: 14, color: adminColors.textMuted, marginTop: 6 }}>
          Data outlet diperbarui otomatis untuk bulan &amp; outlet yang dipilih di bawah.
        </p>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 18px",
            borderRadius: adminRadii.pill,
            border: `1px solid ${adminColors.cardBorder}`,
            backgroundColor: adminColors.white,
          }}
        >
          <CalendarIcon size={16} color={adminColors.textMuted} />
          <PlainSelect defaultValue="Juli" options={["Juli", "Agustus", "September"]} />
          <ChevronDownIcon size={14} color={adminColors.textMuted} />
          <PlainSelect defaultValue="2026" options={["2026", "2025"]} />
          <ChevronDownIcon size={14} color={adminColors.textMuted} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 18px",
            borderRadius: adminRadii.pill,
            border: `1px solid ${adminColors.cardBorder}`,
            backgroundColor: adminColors.white,
          }}
        >
          <PlainSelect defaultValue="Cece Laundry" options={["Cece Laundry", "Cece Laundry 2"]} />
          <ChevronDownIcon size={14} color={adminColors.textMuted} />
        </div>
      </div>
    </div>
  );
}

export default function DashboardContent() {
  return (
    <div>
      <FiltersRow />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 20 }}>
        {primaryStats.map((stat) => (
          <StatCardView key={stat.label} stat={stat} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
        {secondaryStats.map((stat) => (
          <StatCardView key={stat.label} stat={stat} />
        ))}
      </div>

      <div style={{ fontSize: 16, fontWeight: 600, color: adminColors.ink, marginBottom: 16 }}>
        Status Pesanan Hari Ini
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20, marginBottom: 32 }}>
        {orderStatuses.map((status) => (
          <div
            key={status.label}
            style={{
              backgroundColor: adminColors.white,
              border: `1px solid ${adminColors.cardBorder}`,
              borderRadius: adminRadii.card,
              boxShadow: adminShadows.card,
              padding: "18px 20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: adminColors.textMuted, marginBottom: 10 }}>
              {status.showDot && (
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: status.dotColor, display: "inline-block" }} />
              )}
              {status.label}
            </div>
            <div style={{ fontSize: 24, fontWeight: 600, color: status.valueColor }}>{status.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20, marginBottom: 20 }}>
        <TrendChart />
        <VolumeChart />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20 }}>
        <OutletPerformance />
        <TopServices />
      </div>
    </div>
  );
}