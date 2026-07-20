import Image from "next/image";
import { colors, maxWidth, radii, shadows } from "../theme";

const stats = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5" />
        <circle cx="17" cy="8.6" r="2.4" />
        <path d="M15.8 13.7c2.3.4 4.2 2.4 4.2 5.3" />
      </svg>
    ),
    value: "100+",
    title: "Mitra Bisnis",
    description: "Bisnis Laundry yang tumbuh bersama kami",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M12 3.5l7 2.6v5.4c0 4.6-3 7.9-7 9.1-4-1.2-7-4.5-7-9.1V6.1z" />
        <path d="M9.2 12l1.9 1.9 3.7-3.9" />
      </svg>
    ),
    value: "99%",
    title: "Data Tersimpan Aman",
    description: "Keamanan data terjamin setiap saat",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M12.5 3L5 13.5h5.5L10 21l7.5-10.5H12z" />
      </svg>
    ),
    value: "5x",
    title: "Pengelolaan Lebih Cepat",
    description: "Proses transaksi jadi jadwal lebih efisien",
  },
];

const features = [
  {
    image: "/images/frame_ringkasan.avif",
    tag: "Ringkasan Transaksi",
    title: "Satu Platform untuk Seluruh Operasional Laundry Anda",
    description:
      "Mulai dari transaksi, pelanggan, karyawan. Semua dirancang untuk membantu operasional laundry menjadi lebih mudah, terorganisir, dan siap berkembang.",
    variant: "phone",
    showCta: true,
  },
  {
    image: "/images/frame_slot_pegawai.avif",
    tag: "Deteksi Cucian Terlambat",
    title: "Semua yang Kamu Butuhkan untuk Mengelola Laundry",
    description:
      "Pantau seluruh pesanan, target penyelesaian, dan status keterlambatan dalam satu dashboard.",
    highlight: "Pantau Produktivitas Outlet Lewat Ringkasan Harian",
    variant: "panel",
    showCta: false,
  },
  {
    image: "/images/frame_laba.avif",
    tag: "Laporan Laba Rugi",
    title: "Tahu Untung Ruginya, Tanpa Buka Kalkulator",
    description:
      "Laporan laba rugi otomatis dihitung dari transaksi harianmu, jadi kamu selalu tahu posisi keuangan outlet secara real-time.",
    variant: "phone",
    showCta: false,
  },
  {
    image: "/images/frame_piutang.avif",
    tag: "Catatan Piutang",
    title: "Piutang Rapi, Tagihan Tidak Lagi Lupa",
    description:
      "Pantau pelanggan yang belum melunasi cucian, lengkap dengan riwayat dan detail pertumbuhan langganan mereka.",
    highlight: "Cek Riwayat Piutang Pelanggan Kapan Saja",
    variant: "panel",
    showCta: false,
  },
];

export default function Features() {
  return (
    <>
      <section
        style={{
          position: "relative",
          zIndex: 0,
          marginTop: -24,
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: "88px 24px 72px",
        }}
      >
        <div
          style={{
            maxWidth,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 380px) 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="stats-grid"
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
              borderRadius: radii.lg,
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: 13,
                fontWeight: 500,
                color: colors.white,
                backgroundColor: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.3)",
                padding: "7px 16px",
                borderRadius: radii.pill,
                marginBottom: 20,
              }}
            >
              Kenapa Ayo Cuci
            </span>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 500,
                color: colors.white,
                lineHeight: 1.25,
                marginBottom: 14,
              }}
            >
              Hasil Nyata untuk Bisnis Laundry Kamu
            </h3>
            <p
              style={{
                fontSize: 14.5,
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.6,
              }}
            >
              Bukti performa Ayocuci yang membantu ribuan mitra laundry
              berkembang lebih cepat
            </p>
          </div>

          <div>
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "18px 0",
                  borderBottom:
                    index < stats.length - 1
                      ? `1px solid ${colors.line}`
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    flexShrink: 0,
                    borderRadius: radii.md,
                    backgroundColor: colors.orangeSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 500,
                    color: colors.orangeDeep,
                    minWidth: 92,
                  }}
                >
                  {stat.value}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 15.5,
                      fontWeight: 500,
                      color: colors.ink,
                    }}
                  >
                    {stat.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: colors.inkSoft,
                      marginTop: 2,
                    }}
                  >
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fitur"
        style={{ position: "relative", zIndex: 0, padding: "96px 24px" }}
      >
        <div
          style={{
            maxWidth,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 96,
          }}
        >
          {features.map((feature, index) =>
            feature.variant === "phone" ? (
              <div
                key={feature.tag}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 56,
                  alignItems: "center",
                  direction: index % 4 === 2 ? "rtl" : "ltr",
                }}
                className="feature-row"
              >
                <div style={{ direction: "ltr" }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: colors.orangeDeep,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Fitur
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(26px, 3vw, 38px)",
                      fontWeight: 500,
                      color: colors.ink,
                      lineHeight: 1.2,
                      marginTop: 12,
                      marginBottom: 18,
                    }}
                  >
                    {feature.title}
                  </h2>
                  <p
                    style={{
                      fontSize: 15.5,
                      color: colors.inkSoft,
                      lineHeight: 1.65,
                      marginBottom: feature.showCta ? 28 : 0,
                    }}
                  >
                    {feature.description}
                  </p>
                  {feature.showCta && (
                    <a
                      href="#pro"
                      style={{
                        display: "inline-block",
                        background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
                        color: colors.white,
                        fontWeight: 500,
                        fontSize: 15.5,
                        padding: "15px 30px",
                        borderRadius: radii.pill,
                        boxShadow: "0 16px 30px -14px rgba(234, 91, 47, 0.7)",
                      }}
                    >
                      Coba Gratis Sekarang
                    </a>
                  )}
                </div>
                <div style={{ direction: "ltr" }}>
                  <div
                    style={{
                      background: `linear-gradient(150deg, ${colors.peach} 0%, ${colors.orange} 100%)`,
                      borderRadius: radii.lg,
                      padding: "36px 36px 0",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={340}
                      height={640}
                      style={{
                        width: "70%",
                        maxWidth: 300,
                        height: "auto",
                        filter: `drop-shadow(${shadows.card})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div key={feature.tag}>
                <div
                  style={{
                    textAlign: "center",
                    maxWidth: 640,
                    margin: "0 auto 44px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: colors.orangeDeep,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Fitur
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(24px, 2.8vw, 34px)",
                      fontWeight: 500,
                      color: colors.ink,
                      lineHeight: 1.25,
                      marginTop: 12,
                    }}
                  >
                    {feature.title}
                  </h2>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 40,
                    alignItems: "center",
                    direction: index % 4 === 3 ? "rtl" : "ltr",
                  }}
                  className="feature-row"
                >
                  <div
                    style={{
                      direction: "ltr",
                      backgroundColor: colors.orangeSoft,
                      borderRadius: radii.lg,
                      padding: 24,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: colors.white,
                        borderRadius: radii.md,
                        boxShadow: shadows.soft,
                        padding: 16,
                        width: "100%",
                        maxWidth: 380,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={420}
                        height={520}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: radii.sm,
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <p
                      style={{
                        fontSize: 15.5,
                        color: colors.inkSoft,
                        lineHeight: 1.65,
                        marginBottom: 22,
                      }}
                    >
                      {feature.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        backgroundColor: colors.white,
                        border: `1px solid ${colors.line}`,
                        borderRadius: radii.md,
                        padding: "14px 18px",
                        boxShadow: shadows.soft,
                      }}
                    >
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          flexShrink: 0,
                          borderRadius: radii.pill,
                          backgroundColor: colors.orangeSoft,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={colors.orangeDeep}
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="8.5" />
                          <path d="M12 7.5V12l3 2" />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: 14.5,
                          fontWeight: 500,
                          color: colors.ink,
                        }}
                      >
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .feature-row { grid-template-columns: 1fr !important; direction: ltr !important; }
        }
      `}</style>
    </>
  );
}
