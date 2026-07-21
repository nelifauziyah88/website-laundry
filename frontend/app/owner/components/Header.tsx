"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminColors, adminRadii, adminShadows } from "../adminTheme";
import { ChevronDownIcon, SettingsIcon, LogoutIcon } from "./Icons";

type IconProps = { size?: number; color?: string };

function ProfileIcon({ size = 17, color = adminColors.textMuted }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  );
}

type UserData = {
  id: number;
  nama: string;
  email: string;
  avatarUrl: string | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const routeTitles: { path: string; title: string }[] = [
  {
    path: "/laporan-keuangan/laporan-omset",
    title: "Laporan Omset",
  },
  {
    path: "/laporan-keuangan/laporan-pengeluaran",
    title: "Laporan Pengeluaran",
  },
  {
    path: "/laporan-keuangan/laporan-pendapatan",
    title: "Laporan Pendapatan",
  },
  {
    path: "/laporan-keuangan/laporan-piutang",
    title: "Laporan Piutang",
  },
  {
    path: "/laporan-keuangan/laporan-laba-rugi",
    title: "Laporan Laba & Rugi",
  },
  {
    path: "/laporan-transaksi/berjalan",
    title: "Transaksi Berjalan",
  },
  {
    path: "/laporan-transaksi",
    title: "Riwayat Transaksi",
  },
  {
    path: "/laporan-pelanggan/baru",
    title: "Pelanggan Baru",
  },
  {
    path: "/laporan-pelanggan",
    title: "Laporan Pelanggan",
  },
  {
    path: "/settings",
    title: "Pengaturan",
  },
  {
    path: "/profile",
    title: "Profil",
  },
  {
    path: "/dashboard",
    title: "Dashboard Owner",
  },
];

function getTitleFromPath(pathname: string) {
  const match = routeTitles.find((route) => pathname.includes(route.path));

  return match?.title ?? "Dashboard Owner";
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const resolvedTitle = getTitleFromPath(pathname);

  const [user, setUser] = useState<UserData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (response.status === 401) {
          router.replace("/login");
          return;
        }

        const data = (await response.json()) as {
          user?: UserData;
          message?: string;
        };

        if (!response.ok || !data.user) {
          throw new Error(data.message || "Gagal mengambil data pengguna");
        }

        setUser(data.user);
      } catch (error) {
        console.error("Header user error:", error);
      }
    }

    getCurrentUser();
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleLogout() {
    try {
      setIsLoggingOut(true);

      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setIsMenuOpen(false);
      setIsLoggingOut(false);
      router.replace("/login");
      router.refresh();
    }
  }

  const userName = user?.nama || "Memuat...";
  const userEmail = user?.email || "";

  const initials =
    user?.nama
      ?.split(" ")
      .filter(Boolean)
      .map((part) => part.charAt(0))
      .slice(0, 2)
      .join("")
      .toUpperCase() || "U";

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
          type="button"
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

            <div
              style={{
                fontSize: 12.5,
                color: adminColors.textMuted,
              }}
            >
              {userEmail}
            </div>
          </div>

          {user?.avatarUrl ? (
            <div
              style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src={user.avatarUrl}
                alt={`Foto profil ${user.nama}`}
                fill
                sizes="40px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
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
          )}

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
              minWidth: 220,
              backgroundColor: adminColors.white,
              border: `1px solid ${adminColors.cardBorder}`,
              borderRadius: adminRadii.md,
              boxShadow: adminShadows.card,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                backgroundColor: adminColors.white,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: adminColors.ink,
                }}
              >
                {userName}
              </div>

              <div
                style={{
                  marginTop: 3,
                  fontSize: 12,
                  color: adminColors.textMuted,
                  wordBreak: "break-word",
                }}
              >
                {userEmail}
              </div>
            </div>

            <div
              style={{
                height: 1,
                backgroundColor: adminColors.cardBorder,
              }}
            />

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

            <Link
              href="/owner/profile"
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
              <ProfileIcon size={17} color={adminColors.textMuted} />
              Profil
            </Link>

            <div
              style={{
                height: 1,
                backgroundColor: adminColors.cardBorder,
              }}
            />

            <button
              type="button"
              onClick={handleLogout}
              disabled={isLoggingOut}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: adminColors.danger,
                backgroundColor: "transparent",
                border: "none",
                cursor: isLoggingOut ? "not-allowed" : "pointer",
                opacity: isLoggingOut ? 0.6 : 1,
                textAlign: "left",
              }}
            >
              <LogoutIcon size={17} color={adminColors.danger} />

              {isLoggingOut ? "Keluar..." : "Keluar"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}