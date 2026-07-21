"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminColors, adminRadii } from "../adminTheme";
import {
  HamburgerIcon,
  DashboardIcon,
  WalletIcon,
  DocumentIcon,
  UsersIcon,
  SettingsIcon,
  LogoutIcon,
  ChevronDownIcon,
} from "./Icons";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  icon: (props: {
    size?: number;
    color?: string;
    strokeWidth?: number;
  }) => React.ReactNode;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/owner/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Laporan Keuangan",
    icon: WalletIcon,
    children: [
      { label: "Laporan Omset", href: "/owner/laporan-keuangan/laporan-omset" },
      {
        label: "Laporan Pengeluaran",
        href: "/owner/laporan-keuangan/laporan-pengeluaran",
      },
      {
        label: "Laporan Pendapatan",
        href: "/owner/laporan-keuangan/laporan-pendapatan",
      },
      {
        label: "Laporan Piutang",
        href: "/owner/laporan-keuangan/laporan-piutang",
      },
      {
        label: "Laporan Laba & Rugi",
        href: "/owner/laporan-keuangan/laporan-laba-rugi",
      },
    ],
  },
  {
    label: "Laporan Transaksi",
    icon: DocumentIcon,
    children: [
      { label: "Semua Transaksi", href: "/owner/laporan-transaksi/semua-transaksi" },
      {
        label: "Ringkasan per Layanan",
        href: "/owner/laporan-transaksi/ringkasan-per-layanan",
      },
    ],
  },
  {
    label: "Laporan Pelanggan",
    icon: UsersIcon,
    children: [
      { label: "Ringkasan Pelanggan", href: "/owner/laporan-pelanggan/ringkasan-pelanggan" },
      { label: "Detail Laporan Pelanggan", href: "/owner/laporan-pelanggan/detail-laporan-pelanggan" },
    ],
  },
  {
    label: "Pengaturan",
    href: "/owner/settings",
    icon: SettingsIcon,
  },
];

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (label: string) => {
    if (!isOpen) return;
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        width: isOpen ? 280 : 88,
        backgroundColor: adminColors.sidebarBg,
        borderRight: `1px solid ${adminColors.sidebarBorder}`,
        boxShadow: "inset -1px 0 0 rgba(20,15,10,0.02)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.2s ease",
        zIndex: 30,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
          padding: isOpen ? "24px 24px 20px" : "24px 0 20px",
        }}
      >
        {isOpen && (
          <img
            src="/images/LogoAycuci.avif"
            alt="ayocuci"
            style={{
              height: 28,
              objectFit: "contain",
            }}
          />
        )}
        <button
          onClick={onToggle}
          aria-label="Buka atau tutup sidebar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: adminRadii.sm,
            border: "none",
            backgroundColor: "transparent",
            color: adminColors.ink,
            cursor: "pointer",
          }}
        >
          <HamburgerIcon size={20} />
        </button>
      </div>

      <nav
        style={{
          flex: 1,
          overflowY: "auto",
          padding: isOpen ? "4px 16px" : "4px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        {navItems.map((item) => {
          const active =
            isActive(item.href) || item.children?.some((c) => isActive(c.href));
          const isExpanded = Boolean(expanded[item.label]);
          const Icon = item.icon;

          const rowStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "space-between" : "center",
            gap: 12,
            padding: isOpen ? "12px 14px" : "12px 0",
            borderRadius: adminRadii.sm,
            backgroundColor: active ? adminColors.orange : "transparent",
            color: active ? adminColors.white : adminColors.textBody,
            fontSize: 14.5,
            fontWeight: 500,
            cursor: "pointer",
            textDecoration: "none",
          } as const;

          if (item.children) {
            return (
              <div key={item.label}>
                <div
                  style={rowStyle}
                  onClick={() => toggleExpanded(item.label)}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Icon
                      size={19}
                      color={active ? adminColors.white : adminColors.textMuted}
                    />
                    {isOpen && <span>{item.label}</span>}
                  </div>
                  {isOpen && (
                    <span
                      style={{
                        display: "flex",
                        transform: isExpanded
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.15s ease",
                      }}
                    >
                      <ChevronDownIcon
                        size={16}
                        color={
                          active ? adminColors.white : adminColors.textMuted
                        }
                      />
                    </span>
                  )}
                </div>
                {isOpen && isExpanded && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      padding: "4px 0 8px 44px",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          fontSize: 13.5,
                          padding: "8px 10px",
                          borderRadius: adminRadii.sm,
                          color: isActive(child.href)
                            ? adminColors.orangeDeep
                            : adminColors.textMuted,
                          fontWeight: isActive(child.href) ? 600 : 400,
                          textDecoration: "none",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link key={item.label} href={item.href ?? "#"} style={rowStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Icon
                  size={19}
                  color={active ? adminColors.white : adminColors.textMuted}
                />
                {isOpen && <span>{item.label}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      <div
        style={{
          padding: isOpen ? "16px 16px 24px" : "16px 12px 24px",
          borderTop: `1px solid ${adminColors.sidebarBorder}`,
        }}
      >
        <Link
          href="/login"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isOpen ? "flex-start" : "center",
            gap: 12,
            padding: isOpen ? "10px 14px" : "10px 0",
            borderRadius: adminRadii.sm,
            color: adminColors.danger,
            fontSize: 14.5,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          <LogoutIcon size={19} color={adminColors.danger} />
          {isOpen && <span>Keluar</span>}
        </Link>
      </div>
    </aside>
  );
}
