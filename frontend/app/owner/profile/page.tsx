"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import { useRouter } from "next/navigation";
import {
  adminColors,
  adminRadii,
} from "../adminTheme";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000";

const localColors = {
  pageBg: "#FFFFFF",
  cardBg: "#FFFFFF",
  cardBorder: "#EDE8E2",
  inputBorder: "#E4DED6",
  labelColor: "#1F2937",
  required: "#EF4444",
  successBg: "#ECFDF3",
  successText: "#027A48",
  errorBg: "#FFF1F0",
  errorText: "#C62828",
};

type ProfileUser = {
  id: number;
  nama: string;
  email: string;
  nomorHp: string;
  avatarUrl: string | null;
  menggunakanGoogle: boolean;
  memilikiPassword: boolean;
};

export default function ProfilAdminPage() {
  const router = useRouter();

  const [namaLengkap, setNamaLengkap] =
    useState("");
  const [email, setEmail] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [passwordBaru, setPasswordBaru] =
    useState("");
  const [
    konfirmasiPassword,
    setKonfirmasiPassword,
  ] = useState("");

  const [menggunakanGoogle, setMenggunakanGoogle] =
    useState(false);
  const [memilikiPassword, setMemilikiPassword] =
    useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");

  useEffect(() => {
    async function loadProfile() {
      try {
        setLoading(true);
        setMessage("");

        const response = await fetch(
          `${API_URL}/api/auth/me`,
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );

        if (response.status === 401) {
          router.replace("/login");
          return;
        }

        const data = (await response.json()) as {
          user?: ProfileUser;
          message?: string;
        };

        if (!response.ok || !data.user) {
          throw new Error(
            data.message ||
              "Gagal mengambil profil"
          );
        }

        setNamaLengkap(data.user.nama);
        setEmail(data.user.email);
        setNomorHp(data.user.nomorHp || "");
        setMenggunakanGoogle(
          data.user.menggunakanGoogle
        );
        setMemilikiPassword(
          data.user.memilikiPassword
        );
      } catch (error) {
        setMessageType("error");
        setMessage(
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan"
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [router]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    if (!namaLengkap.trim()) {
      setMessageType("error");
      setMessage("Nama lengkap wajib diisi");
      return;
    }

    if (!email.trim()) {
      setMessageType("error");
      setMessage("Email wajib diisi");
      return;
    }

    if (
      passwordBaru &&
      passwordBaru !== konfirmasiPassword
    ) {
      setMessageType("error");
      setMessage(
        "Konfirmasi password tidak sama"
      );
      return;
    }

    if (
      passwordBaru &&
      passwordBaru.length < 8
    ) {
      setMessageType("error");
      setMessage(
        "Password minimal 8 karakter"
      );
      return;
    }

    try {
      setSaving(true);

      const response = await fetch(
        `${API_URL}/api/auth/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            nama: namaLengkap,
            email,
            nomorHp,
            passwordBaru,
            konfirmasiPassword,
          }),
        }
      );

      const data = (await response.json()) as {
        message?: string;
        user?: ProfileUser;
      };

      if (!response.ok || !data.user) {
        throw new Error(
          data.message ||
            "Gagal menyimpan profil"
        );
      }

      setNamaLengkap(data.user.nama);
      setEmail(data.user.email);
      setNomorHp(data.user.nomorHp || "");
      setMenggunakanGoogle(
        data.user.menggunakanGoogle
      );
      setMemilikiPassword(
        data.user.memilikiPassword
      );

      setPasswordBaru("");
      setKonfirmasiPassword("");

      setMessageType("success");
      setMessage(
        data.message ||
          "Profil berhasil diperbarui"
      );

      // Memberi tahu Header bahwa profil berubah.
      window.dispatchEvent(
        new CustomEvent("profile-updated", {
          detail: data.user,
        })
      );
    } catch (error) {
      setMessageType("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan"
      );
    } finally {
      setSaving(false);
    }
  }

  const inputStyle: CSSProperties = {
    width: "100%",
    border: `1px solid ${localColors.inputBorder}`,
    borderRadius: adminRadii.sm,
    padding: "13px 16px",
    fontSize: 14.5,
    color: adminColors.ink,
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: adminColors.white,
  };

  const labelStyle: CSSProperties = {
    display: "block",
    fontSize: 14.5,
    fontWeight: 500,
    color: localColors.labelColor,
    marginBottom: 10,
  };

  if (loading) {
    return (
      <div
        style={{
          padding: 32,
          color: adminColors.textMuted,
        }}
      >
        Memuat profil...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: localColors.pageBg,
        fontFamily: "var(--font-body)",
      }}
    >
      <div style={{ marginBottom: 28 }}>
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
            Profil
          </span>
        </div>

        <h2
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: adminColors.ink,
            margin: "0 0 8px",
          }}
        >
          Profil Admin
        </h2>

        <p
          style={{
            fontSize: 14.5,
            color: adminColors.textMuted,
            margin: 0,
          }}
        >
          Kelola data akun pribadi Anda.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: localColors.cardBg,
          border: `1px solid ${localColors.cardBorder}`,
          borderRadius: adminRadii.lg ?? 16,
          padding: 32,
          maxWidth: 960,
        }}
      >
        {menggunakanGoogle && (
          <div
            style={{
              marginBottom: 24,
              padding: "12px 16px",
              borderRadius: adminRadii.sm,
              backgroundColor: "#F5F8FF",
              color: "#3157A4",
              fontSize: 13.5,
              lineHeight: 1.5,
            }}
          >
            Akun ini terhubung dengan Google.
            {!memilikiPassword &&
              " Saat ini akun belum memiliki password lokal. Kamu dapat membuat password melalui formulir di bawah."}
          </div>
        )}

        {message && (
          <div
            style={{
              marginBottom: 24,
              padding: "12px 16px",
              borderRadius: adminRadii.sm,
              fontSize: 14,
              backgroundColor:
                messageType === "success"
                  ? localColors.successBg
                  : localColors.errorBg,
              color:
                messageType === "success"
                  ? localColors.successText
                  : localColors.errorText,
            }}
          >
            {message}
          </div>
        )}

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Nama Lengkap{" "}
            <span
              style={{
                color: localColors.required,
              }}
            >
              *
            </span>
          </label>

          <input
            type="text"
            value={namaLengkap}
            onChange={(event) =>
              setNamaLengkap(event.target.value)
            }
            required
            disabled={saving}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Email{" "}
            <span
              style={{
                color: localColors.required,
              }}
            >
              *
            </span>
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            disabled={saving}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={labelStyle}>
            Nomor HP
          </label>

          <input
            type="tel"
            value={nomorHp}
            onChange={(event) =>
              setNomorHp(event.target.value)
            }
            placeholder="Contoh: 081234567890"
            disabled={saving}
            style={inputStyle}
          />
        </div>

        <div
          className="profile-password-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div>
            <label style={labelStyle}>
              {memilikiPassword
                ? "Password Baru"
                : "Buat Password"}
            </label>

            <input
              type="password"
              value={passwordBaru}
              onChange={(event) =>
                setPasswordBaru(
                  event.target.value
                )
              }
              placeholder={
                memilikiPassword
                  ? "Kosongkan jika tidak diubah"
                  : "Minimal 8 karakter"
              }
              autoComplete="new-password"
              disabled={saving}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>
              Konfirmasi Password
            </label>

            <input
              type="password"
              value={konfirmasiPassword}
              onChange={(event) =>
                setKonfirmasiPassword(
                  event.target.value
                )
              }
              placeholder="Ulangi password baru"
              autoComplete="new-password"
              disabled={saving}
              style={inputStyle}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          style={{
            border: "none",
            outline: "none",
            cursor: saving
              ? "not-allowed"
              : "pointer",
            backgroundColor: adminColors.orange,
            color: adminColors.white,
            borderRadius: adminRadii.sm,
            padding: "14px 28px",
            fontSize: 14.5,
            fontWeight: 500,
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving
            ? "Menyimpan..."
            : "Simpan Perubahan"}
        </button>
      </form>

      <style>{`
        @media (max-width: 700px) {
          .profile-password-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}