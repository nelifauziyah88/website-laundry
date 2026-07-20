"use client";

import { useState } from "react";
import { colors, maxWidth, radii, shadows } from "../theme";

const socials = [
  {
    label: "Email",
    href: "mailto:support@ayocuci.co.id",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.orangeDeep} strokeWidth="1.8">
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/628117030030",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.8">
        <path d="M6 18.5L4.5 21l2.6-1.4A8 8 0 1 0 4.5 13.5 8 8 0 0 0 6 18.5z" />
        <path d="M9 10.2c0 3.4 2.8 6.2 6.2 6.2.6 0 1-.5.9-1l-.2-1a.9.9 0 0 0-.7-.7l-1.6-.4a.9.9 0 0 0-.9.3l-.4.5a5 5 0 0 1-2.6-2.6l.5-.4a.9.9 0 0 0 .3-.9l-.4-1.6a.9.9 0 0 0-.7-.7l-1-.2c-.5-.1-1 .3-1 .9z" fill="#25D366" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585225341943&rdid=EevXER838MESMcZk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18xczUe1pP%2F#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.95 8.44-9.94z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ayocuci.co.id?igsh=MWxzb2UwZTM5NHcweA%3D%3D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#igGradient)" strokeWidth="1.8">
        <defs>
          <linearGradient id="igGradient" x1="0" y1="24" x2="24" y2="0">
            <stop offset="0" stopColor="#F9CE34" />
            <stop offset="0.5" stopColor="#EE2A7B" />
            <stop offset="1" stopColor="#6228D7" />
          </linearGradient>
        </defs>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="url(#igGradient)" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ayocuci.co.id?_r=1&_t=ZS-97KwYMYojje",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill={colors.ink}>
        <path d="M16.5 2h-3v13.6a2.9 2.9 0 1 1-2.1-2.8v-3.1a6 6 0 1 0 5.1 5.9V9.1a7.6 7.6 0 0 0 4.5 1.5V7.6a4.6 4.6 0 0 1-4.5-4.5V2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    namaLaundry: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 0,
        backgroundColor: "#ffffff",
        padding: "80px 24px 96px",
      }}
    >
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 420px) 1fr",
          gap: 56,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 500,
              color: colors.ink,
              lineHeight: 1.2,
              marginBottom: 18,
            }}
          >
            Tentang Ayocuci
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: colors.inkSoft,
              lineHeight: 1.65,
              maxWidth: 420,
              marginBottom: 28,
            }}
          >
            Ayocuci lahir dari semangat untuk mentransformasi bisnis laundry
            konvensional di Indonesia menjadi lebih modern melalui teknologi.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: radii.md,
                  backgroundColor: colors.white,
                  boxShadow: shadows.soft,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: colors.white,
            borderRadius: radii.lg,
            boxShadow: shadows.card,
            padding: 40,
          }}
        >
          <label style={{ display: "block", marginBottom: 22 }}>
            <span style={{ display: "block", fontSize: 14.5, fontWeight: 500, color: colors.ink, marginBottom: 8 }}>
              Nama
            </span>
            <input
              type="text"
              value={form.nama}
              onChange={handleChange("nama")}
              required
              style={{
                width: "100%",
                padding: "13px 16px",
                fontSize: 15,
                color: colors.ink,
                border: `1px solid ${colors.line}`,
                borderRadius: radii.sm,
                outline: "none",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 22 }}>
            <span style={{ display: "block", fontSize: 14.5, fontWeight: 500, color: colors.ink, marginBottom: 8 }}>
              Nomor Whatsapp
            </span>
            <input
              type="tel"
              value={form.whatsapp}
              onChange={handleChange("whatsapp")}
              required
              style={{
                width: "100%",
                padding: "13px 16px",
                fontSize: 15,
                color: colors.ink,
                border: `1px solid ${colors.line}`,
                borderRadius: radii.sm,
                outline: "none",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 22 }}>
            <span style={{ display: "block", fontSize: 14.5, fontWeight: 500, color: colors.ink, marginBottom: 8 }}>
              Nama Laundry
            </span>
            <input
              type="text"
              value={form.namaLaundry}
              onChange={handleChange("namaLaundry")}
              required
              style={{
                width: "100%",
                padding: "13px 16px",
                fontSize: 15,
                color: colors.ink,
                border: `1px solid ${colors.line}`,
                borderRadius: radii.sm,
                outline: "none",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: 28 }}>
            <span style={{ display: "block", fontSize: 14.5, fontWeight: 500, color: colors.ink, marginBottom: 8 }}>
              Apa yang Bisa Kami Bantu?
            </span>
            <textarea
              value={form.pesan}
              onChange={handleChange("pesan")}
              required
              rows={5}
              style={{
                width: "100%",
                padding: "13px 16px",
                fontSize: 15,
                color: colors.ink,
                border: `1px solid ${colors.line}`,
                borderRadius: radii.sm,
                outline: "none",
                resize: "vertical",
              }}
            />
          </label>

          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16 }}>
            {submitted && (
              <span style={{ fontSize: 14, color: colors.orangeDeep }}>
                Terima kasih, pesan kamu sudah terkirim.
              </span>
            )}
            <button
              type="submit"
              style={{
                background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
                color: colors.white,
                fontWeight: 500,
                fontSize: 15.5,
                padding: "14px 32px",
                borderRadius: radii.pill,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 16px 30px -14px rgba(234, 91, 47, 0.7)",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}