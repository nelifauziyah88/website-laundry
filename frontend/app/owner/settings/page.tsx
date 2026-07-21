"use client";

import { useState } from "react";
import { adminColors, adminRadii } from "../adminTheme";
import { ChevronDownIcon } from "../components/Icons";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  inputBorder: "#E4DED6",
  labelColor: "#1F2937",
  required: "#EF4444",
};

type IconProps = { size?: number; color?: string };

function BuildingIcon({ size = 18, color = adminColors.textMuted }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2" />
      <path d="M14 7h2" />
      <path d="M8 11h2" />
      <path d="M14 11h2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

const outlets = ["Cece Laundry", "Bintang Laundry", "Ayo Cuci Sejahtera"];
const provinsiOptions = ["Kepulauan Riau", "Riau", "Sumatera Utara"];
const kotaOptions = ["Kota Batam", "Kota Tanjungpinang"];
const kecamatanOptions = ["Batam Kota", "Sekupang", "Nongsa"];

export default function PengaturanProfilOutletPage() {
  const [outlet, setOutlet] = useState(outlets[0]);
  const [namaOutlet, setNamaOutlet] = useState("Cece Laundry");
  const [nomorHp, setNomorHp] = useState("081248118613");
  const [alamat, setAlamat] = useState("King Business Center A5 No 3 Batam");
  const [provinsi, setProvinsi] = useState(provinsiOptions[0]);
  const [kota, setKota] = useState(kotaOptions[0]);
  const [kecamatan, setKecamatan] = useState(kecamatanOptions[0]);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${localColors.inputBorder}`,
    borderRadius: adminRadii.sm,
    padding: "13px 16px",
    fontSize: 14.5,
    color: adminColors.ink,
    outline: "none",
    boxSizing: "border-box",
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${localColors.inputBorder}`,
    borderRadius: adminRadii.sm,
    padding: "13px 16px",
    fontSize: 14.5,
    color: adminColors.ink,
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    background: "transparent",
    boxSizing: "border-box",
    cursor: "pointer",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 14.5,
    fontWeight: 500,
    color: localColors.labelColor,
    marginBottom: 10,
  };

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
              Pengaturan
            </span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 500, color: adminColors.ink, margin: "0 0 8px" }}>
            Profil Outlet
          </h2>
          <p style={{ fontSize: 14.5, color: adminColors.textMuted, margin: 0 }}>
            Kelola data outlet yang dipilih di bawah.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <BuildingIcon />
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
                fontWeight: 500,
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
      </div>

      <div
        style={{
          backgroundColor: localColors.cardBg,
          border: `1px solid ${localColors.cardBorder}`,
          borderRadius: adminRadii.lg ?? 16,
          padding: 32,
          maxWidth: 960,
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Nama Outlet <span style={{ color: localColors.required }}>*</span>
          </label>
          <input
            value={namaOutlet}
            onChange={(e) => setNamaOutlet(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Nomor HP <span style={{ color: localColors.required }}>*</span>
          </label>
          <input
            value={nomorHp}
            onChange={(e) => setNomorHp(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Alamat <span style={{ color: localColors.required }}>*</span>
          </label>
          <input
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div>
            <label style={labelStyle}>
              Provinsi <span style={{ color: localColors.required }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <select
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
                style={selectStyle}
              >
                {provinsiOptions.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <ChevronDownIcon size={14} color={adminColors.textMuted} />
              </span>
            </div>
          </div>

          <div>
            <label style={labelStyle}>
              Kota/Kabupaten <span style={{ color: localColors.required }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <select
                value={kota}
                onChange={(e) => setKota(e.target.value)}
                style={selectStyle}
              >
                {kotaOptions.map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
              <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <ChevronDownIcon size={14} color={adminColors.textMuted} />
              </span>
            </div>
          </div>

          <div>
            <label style={labelStyle}>
              Kecamatan <span style={{ color: localColors.required }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <select
                value={kecamatan}
                onChange={(e) => setKecamatan(e.target.value)}
                style={selectStyle}
              >
                {kecamatanOptions.map((k) => (
                  <option key={k}>{k}</option>
                ))}
              </select>
              <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
                <ChevronDownIcon size={14} color={adminColors.textMuted} />
              </span>
            </div>
          </div>
        </div>

        <button
          style={{
            border: "none",
            outline: "none",
            cursor: "pointer",
            backgroundColor: adminColors.orange,
            color: adminColors.white,
            borderRadius: adminRadii.sm,
            padding: "14px 28px",
            fontSize: 14.5,
            fontWeight: 500,
          }}
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}