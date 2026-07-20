"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { colors, radii } from "../theme";

const navLinks = [
  { label: "Fitur", href: "/#fitur" },
  { label: "Harga", href: "/#pro" },
  { label: "Artikel", href: "/#artikel" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        padding: "20px 24px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          backgroundColor: "rgba(255, 253, 250, 0.92)",
          backdropFilter: "blur(14px)",
          borderRadius: radii.pill,
          padding: "10px 12px 10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: scrolled
            ? "0 18px 40px -18px rgba(27, 36, 48, 0.28)"
            : "0 14px 34px -20px rgba(27, 36, 48, 0.2)",
          transition: "box-shadow 0.25s ease",
        }}
      >
        <a
          href="#top"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/LogoAycuci.avif"
            alt="Ayocuci"
            width={124}
            height={35}
            priority
          />
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            flex: 1,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: colors.inkSoft,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          className="desktop-nav"
        >
          <a
            href="/login"
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: colors.white,
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
              padding: "13px 30px",
              borderRadius: radii.pill,
              boxShadow: "0 12px 24px -10px rgba(234, 91, 47, 0.65)",
            }}
          >
            Login
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="mobile-nav-toggle"
          aria-label="Buka menu"
          style={{
            display: "none",
            width: 40,
            height: 40,
            borderRadius: radii.sm,
            border: `1px solid ${colors.line}`,
            backgroundColor: colors.white,
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: 18,
              height: 2,
              backgroundColor: colors.ink,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: open ? 0 : -6,
                left: 0,
                width: 18,
                height: 2,
                backgroundColor: colors.ink,
                transform: open ? "rotate(45deg)" : "none",
                transition: "all 0.2s ease",
              }}
            />
            <span
              style={{
                position: "absolute",
                top: open ? 0 : 6,
                left: 0,
                width: 18,
                height: 2,
                backgroundColor: colors.ink,
                transform: open ? "rotate(-45deg)" : "none",
                transition: "all 0.2s ease",
              }}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          style={{
            maxWidth: 1180,
            margin: "10px auto 0",
            borderRadius: radii.lg,
            backgroundColor: colors.white,
            boxShadow: "0 18px 40px -18px rgba(27, 36, 48, 0.28)",
            padding: "20px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, fontWeight: 600, color: colors.ink }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pro"
            onClick={() => setOpen(false)}
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: colors.white,
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
              padding: "12px 22px",
              borderRadius: radii.pill,
              textAlign: "center",
            }}
          >
            Login
          </a>
        </div>
      ) : null}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
