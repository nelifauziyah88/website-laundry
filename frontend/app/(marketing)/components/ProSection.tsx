import { colors, maxWidth, radii, shadows } from "../theme";

const benefits = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M12 3.5l7 2.6v5.4c0 4.6-3 7.9-7 9.1-4-1.2-7-4.5-7-9.1V6.1z" />
        <path d="M9.2 12l1.9 1.9 3.7-3.9" />
      </svg>
    ),
    title: "Lisensi outlet permanen",
    description:
      "Sekali aktivasi, outletmu aktif selamanya tanpa biaya bulanan.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M6.5 3.5h11v17l-2.2-1.6-2.3 1.6-2.3-1.6-2.2 1.6-2-1.6z" />
        <path d="M9 8h6M9 11.5h6M9 15h4" />
      </svg>
    ),
    title: "Akses fitur tambahan",
    description:
      "Buka fitur eceran seperti laporan laba rugi dan slot pegawai sesuai kebutuhan.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M7.5 17.5a4 4 0 010-8 5 5 0 019.6-1.4A3.8 3.8 0 0119 17.5H7.5z" />
      </svg>
    ),
    title: "Data tersimpan di cloud",
    description:
      "Semua data transaksi tersimpan aman dan bisa diakses kapan saja.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={colors.orangeDeep}
        strokeWidth="1.8"
      >
        <path d="M4.5 12a7.5 7.5 0 0112.7-5.4M19.5 12a7.5 7.5 0 01-12.7 5.4" />
        <path d="M17.2 3.8v3h-3M6.8 20.2v-3h3" />
      </svg>
    ),
    title: "Update fitur gratis selamanya",
    description:
      "Setiap pembaruan sistem baru otomatis kamu dapatkan tanpa biaya tambahan.",
  },
];

export default function ProSection() {
  return (
    <section id="pro" style={{ padding: "96px 24px" }}>
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="pro-grid"
      >
        <div>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.orangeDeep,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Aktivasi Outlet PRO
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 500,
              color: colors.ink,
              lineHeight: 1.15,
              marginTop: 12,
              marginBottom: 16,
            }}
          >
            Satu langkah lagi outletmu aktif selamanya
          </h2>
          <p
            style={{
              fontSize: 16,
              color: colors.inkSoft,
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            Tidak ada biaya berlangganan bulanan. Aktivasi sekali, nikmati
            seluruh ekosistem Ayocuci dan tambahkan fitur eceran hanya saat kamu
            benar-benar membutuhkannya.
          </p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
            className="benefits-grid"
          >
            {benefits.map((benefit) => (
              <div key={benefit.title} style={{ display: "flex", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: radii.sm,
                    backgroundColor: colors.orangeSoft,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {benefit.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: colors.ink,
                      marginBottom: 4,
                    }}
                  >
                    {benefit.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      color: colors.inkSoft,
                      lineHeight: 1.5,
                    }}
                  >
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            backgroundColor: colors.white,
            borderRadius: radii.lg,
            border: `1px solid ${colors.line}`,
            boxShadow: shadows.card,
            padding: 40,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: colors.inkSoft,
              marginBottom: 12,
            }}
          >
            Total Investasi Aktivasi
          </div>
          <div
            style={{
              fontSize: 16,
              color: colors.inkSoft,
              textDecoration: "line-through",
              marginBottom: 4,
            }}
          >
            Rp 1.500.000
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 48,
              fontWeight: 500,
              color: colors.orange,
              marginBottom: 4,
            }}
          >
            GRATIS
          </div>
          <div
            style={{
              fontSize: 13.5,
              color: "#1E8A5F",
              fontWeight: 500,
              marginBottom: 28,
            }}
          >
            Sekali Bayar, Aktif Selamanya
          </div>

          <a
            href="#top"
            style={{
              display: "block",
              backgroundColor: colors.orange,
              color: colors.white,
              fontWeight: 500,
              fontSize: 15.5,
              padding: "16px 28px",
              borderRadius: radii.pill,
              boxShadow: "0 16px 30px -14px rgba(234, 91, 47, 0.7)",
              marginBottom: 14,
            }}
          >
            Aktifkan Sekarang
          </a>
          <div style={{ fontSize: 12.5, color: colors.inkSoft }}>
            Tanpa kartu kredit. Tanpa biaya tersembunyi.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pro-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
