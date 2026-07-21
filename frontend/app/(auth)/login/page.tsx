"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { colors, radii, shadows } from "../../(marketing)/theme";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("error") === "google") {
      setError(
        "Login Google gagal. Pastikan email Google sudah terdaftar di database.",
      );
    }
  }, []);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          rememberMe,
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        redirectTo?: string;
      };

      if (!response.ok) {
        throw new Error(data.message || "Login gagal");
      }

      router.push(data.redirectTo || "/owner/dashboard");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Tidak dapat terhubung ke server",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleLogin() {
    window.location.href = `${API_URL}/api/auth/google`;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F3F5",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1240,
          backgroundColor: colors.white,
          borderRadius: radii.lg,
          boxShadow: shadows.card,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="login-shell"
      >
        <div
          style={{
            padding: "56px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="login-form-side"
        >
          <Link href="/#hero">
            <Image
              src="/images/LogoAycuci.avif"
              alt="Ayocuci"
              width={130}
              height={37}
              style={{ marginBottom: 40 }}
            />
          </Link>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              fontWeight: 700,
              color: colors.ink,
              marginBottom: 10,
            }}
          >
            Selamat Datang Kembali!
          </h1>

          <p
            style={{
              fontSize: 15,
              color: colors.inkSoft,
              marginBottom: 32,
            }}
          >
            Masuk untuk mengelola bisnis laundry Anda
          </p>

          <form
            onSubmit={handleLogin}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              autoComplete="email"
              required
              style={{
                boxSizing: "border-box",
                width: "100%",
                fontSize: 15,
                color: colors.ink,
                padding: "15px 18px",
                borderRadius: radii.md,
                border: `1px solid ${colors.line}`,
                outline: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                autoComplete="current-password"
                required
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  fontSize: 15,
                  color: colors.ink,
                  padding: "15px 44px 15px 18px",
                  borderRadius: radii.md,
                  border: `1px solid ${colors.line}`,
                  outline: "none",
                }}
              />

              <button
                type="button"
                aria-label={
                  showPassword ? "Sembunyikan password" : "Tampilkan password"
                }
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  color: colors.inkSoft,
                }}
              >
                {showPassword ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.6 5.1A10.6 10.6 0 0112 5c5 0 9 3.5 10.5 7-.5 1.1-1.2 2.2-2.1 3.1M6.6 6.6C4.5 8 3 9.9 1.5 12 3 15.5 7 19 12 19c1.4 0 2.7-.3 3.9-.8" />
                    <path d="M9.9 9.9a3 3 0 004.2 4.2" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  color: colors.ink,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  style={{
                    width: 16,
                    height: 16,
                    accentColor: colors.orange,
                    cursor: "pointer",
                  }}
                />
                Ingatkan saya
              </label>

              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                style={{
                  fontSize: 14,
                  color: colors.orange,
                  fontWeight: 500,
                }}
              >
                Lupa password?
              </a>
            </div>

            {error && (
              <p
                role="alert"
                style={{
                  margin: 0,
                  padding: "11px 13px",
                  borderRadius: radii.md,
                  backgroundColor: "#FFF1F0",
                  color: "#C62828",
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: colors.orange,
                color: colors.white,
                fontWeight: 700,
                fontSize: 15.5,
                padding: "16px 24px",
                borderRadius: radii.md,
                border: "none",
                boxShadow: "0 16px 30px -14px rgba(234, 91, 47, 0.7)",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                marginTop: 8,
              }}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, backgroundColor: colors.line }} />
            <span
              style={{
                fontSize: 13.5,
                color: colors.inkSoft,
                whiteSpace: "nowrap",
              }}
            >
              Atau lanjutkan dengan
            </span>
            <div style={{ flex: 1, height: 1, backgroundColor: colors.line }} />
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              backgroundColor: colors.white,
              color: colors.ink,
              fontWeight: 500,
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: radii.md,
              border: `1px solid ${colors.line}`,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48">
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.4 0 10.3-1.9 14-5.3l-6.5-5.4C29.4 35.4 26.9 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-.7 2.1-2 3.9-3.8 5.3l6.5 5.4C39.9 37.4 44 31.4 44 24c0-1.2-.1-2.4-.4-3.5z"
              />
            </svg>
            Masuk dengan Google
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: `linear-gradient(150deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
            padding: "56px 48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
          className="login-mascot-side"
        >
          <Image
            src="/images/maskot.png"
            alt="Maskot Ayocuci"
            width={340}
            height={340}
            style={{
              width: "60%",
              maxWidth: 300,
              height: "auto",
              marginBottom: 32,
            }}
          />

          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: colors.white,
              lineHeight: 1.5,
              maxWidth: 380,
            }}
          >
            Kelola transaksi, pantau status cucian, dan lihat laporan bisnis
            laundry Anda dalam satu aplikasi.
          </p>

          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 40,
              width: 220,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.18)",
              filter: "blur(14px)",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .login-shell { grid-template-columns: 1fr !important; }
          .login-mascot-side { display: none !important; }
          .login-form-side { padding: 40px 28px !important; }
        }
      `}</style>
    </div>
  );
}
