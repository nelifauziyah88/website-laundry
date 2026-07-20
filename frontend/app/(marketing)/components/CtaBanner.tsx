import { colors, maxWidth, radii } from "../theme";

export default function CtaBanner() {
  return (
    <section style={{ padding: "0 24px 96px" }}>
      <div
        style={{
          maxWidth,
          margin: "0 auto",
          background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
          borderRadius: radii.lg,
          padding: "56px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
        className="cta-banner"
      >
        <div style={{ maxWidth: 480 }} className="cta-text">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 2.8vw, 32px)",
              fontWeight: 500,
              color: colors.white,
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            Siap bikin operasional laundrymu lebih rapi?
          </h2>
          <p
            style={{
              fontSize: 15.5,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
            }}
          >
            Coba Ayocuci sekarang dan rasakan bedanya mengelola outlet dengan
            aplikasi yang benar-benar dibuat untuk pemilik laundry.
          </p>
        </div>
        <a
          href="/login"
          style={{
            backgroundColor: colors.white,
            color: colors.orangeDeep,
            fontWeight: 500,
            fontSize: 15.5,
            padding: "16px 30px",
            borderRadius: radii.pill,
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
          className="cta-button"
        >
          Mulai Gratis Sekarang
        </a>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .cta-banner {
            padding: 40px 28px !important;
            flex-direction: column !important;
            text-align: center !important;
          }
          .cta-text {
            max-width: 100% !important;
          }
          .cta-button {
            width: 100% !important;
            white-space: normal !important;
          }
        }
        @media (max-width: 420px) {
          .cta-banner {
            padding: 32px 20px !important;
            border-radius: ${radii.md} !important;
          }
        }
      `}</style>
    </section>
  );
}
