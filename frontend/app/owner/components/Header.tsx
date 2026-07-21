"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminColors, adminRadii, adminShadows } from "../adminTheme";
import { ChevronDownIcon, SettingsIcon, LogoutIcon } from "./Icons";

type HeaderProps = {
  userName: string;
  userEmail: string;
};

const routeTitles: { path: string; title: string }[] = [
  { path: "/laporan-keuangan/laporan-omset", title: "Laporan Omset" },
  { path: "/laporan-keuangan/laporan-pengeluaran", title: "Laporan Pengeluaran" },
  { path: "/laporan-keuangan/laporan-pendapatan", title: "Laporan Pendapatan" },
  { path: "/laporan-keuangan/laporan-piutang", title: "Laporan Piutang" },
  { path: "/laporan-keuangan/laporan-laba-rugi", title: "Laporan Laba & Rugi" },
  { path: "/laporan-transaksi/berjalan", title: "Transaksi Berjalan" },
  { path: "/laporan-transaksi", title: "Riwayat Transaksi" },
  { path: "/laporan-pelanggan/baru", title: "Pelanggan Baru" },
  { path: "/laporan-pelanggan", title: "Laporan Pelanggan" },
  { path: "/settings", title: "Pengaturan" },
  { path: "/dashboard", title: "Dashboard Owner" },
];

function getTitleFromPath(pathname: string) {
  const match = routeTitles.find((route) => pathname.includes(route.path));
  return match?.title ?? "Dashboard Owner";
}

export default function Header({ userName, userEmail }: HeaderProps) {
  const pathname = usePathname();
  const resolvedTitle = getTitleFromPath(pathname);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = userName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 32px",
        backgroundColor: adminColors.white,
        borderBottom: `1px solid ${adminColors.cardBorder}`,
      }}
    >
      <h1
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: adminColors.ink,
          margin: 0,
        }}
      >
        {resolvedTitle}
      </h1>

      <div ref={menuRef} style={{ position: "relative" }}>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            padding: 4,
          }}
        >
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: 14.5,
                fontWeight: 600,
                color: adminColors.ink,
              }}
            >
              {userName}
            </div>
            <div style={{ fontSize: 12.5, color: adminColors.textMuted }}>
              {userEmail}
            </div>
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: adminColors.orangeSoft,
              color: adminColors.orangeDeep,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <span
            style={{
              display: "flex",
              transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.15s ease",
            }}
          >
            <ChevronDownIcon size={16} color={adminColors.textMuted} />
          </span>
        </button>

        {isMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 10px)",
              right: 0,
              minWidth: 200,
              backgroundColor: adminColors.white,
              border: `1px solid ${adminColors.cardBorder}`,
              borderRadius: adminRadii.md,
              boxShadow: adminShadows.card,
              overflow: "hidden",
            }}
          >
            <Link
              href="/owner/settings"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: adminColors.textBody,
                textDecoration: "none",
              }}
            >
              <SettingsIcon size={17} color={adminColors.textMuted} />
              Pengaturan
            </Link>
            <div
              style={{ height: 1, backgroundColor: adminColors.cardBorder }}
            />
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: adminColors.danger,
                textDecoration: "none",
              }}
            >
              <LogoutIcon size={17} color={adminColors.danger} />
              Keluar
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}