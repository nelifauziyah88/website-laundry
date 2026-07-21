import Image from "next/image";
import { colors, radii, shadows } from "../theme";

const partners = [
  { src: "/images/partner1.webp", alt: "Kuman Setrika Laundry" },
  { src: "/images/partner2.webp", alt: "Mesin Laundry Care Medan" },
  { src: "/images/partner3.webp", alt: "Bengkel Mesin Laundry Indonesia" },
  { src: "/images/partner4.webp", alt: "Wangi Laundry Store" },
  { src: "/images/partner5.webp", alt: "Pojok Pewangi Laundry" },
  { src: "/images/partner6.webp", alt: "Galeri Mesin Laundry" },
  { src: "/images/partner7.webp", alt: "EcoPack Laundry Supply" },
];

const marqueeItems = [...partners, ...partners];

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
        paddingTop: 48,
        paddingBottom: 0,
        background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.peach} 45%, ${colors.peachDeep} 100%)`,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.5,
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 42px),
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.55) 0px, rgba(255,255,255,0.55) 1px, transparent 1px, transparent 42px)
          `,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 680,
          margin: "0 auto",
          padding: "40px 24px 0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: colors.orangeSoft,
            border: `1px solid ${colors.peachDeep}`,
            color: colors.orangeDeep,
            fontSize: 13.5,
            fontWeight: 400,
            padding: "9px 18px",
            borderRadius: radii.pill,
            marginBottom: 24,
          }}
        >
          Kelola Bisnis Tanpa Ribet
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(30px, 5vw, 46px)",
            lineHeight: 1.18,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          <span style={{ display: "block", color: colors.ink }}>
            Aplikasi Kasir Laundry
          </span>
          <span style={{ display: "block", color: colors.orange }}>
            Modern &amp; Praktis
          </span>
        </h1>

        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.65,
            color: colors.inkSoft,
            maxWidth: 480,
            margin: "0 auto 32px",
          }}
        >
          Kelola transaksi, pantau status cucian, dan lihat laporan bisnis
          laundry kamu dalam satu aplikasi yang mudah digunakan.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 14,
            marginBottom: 0,
          }}
        >
          <a
            href="/login"
            style={{
              flex: "1 1 auto",
              maxWidth: 220,
              textAlign: "center",
              background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
              color: colors.white,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 28px",
              borderRadius: radii.pill,
              boxShadow: "0 16px 30px -14px rgba(234, 91, 47, 0.7)",
            }}
          >
            Coba Gratis Sekarang
          </a>
          <a
            href="/login"
            style={{
              flex: "1 1 auto",
              maxWidth: 220,
              textAlign: "center",
              backgroundColor: colors.white,
              color: colors.ink,
              fontWeight: 500,
              fontSize: 16,
              padding: "16px 28px",
              borderRadius: radii.pill,
              boxShadow: shadows.soft,
            }}
          >
            Download Sekarang
          </a>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 900,
          margin: "40px auto 0",
          padding: "0 24px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "32%",
            transform: "rotate(-9deg) translate(14px, 26px)",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/phone_left.avif"
            alt="Layar transaksi Ayocuci"
            width={384}
            height={587}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: radii.md,
              filter: `drop-shadow(${shadows.soft})`,
            }}
          />
        </div>
        <div style={{ width: "40%", zIndex: 2, margin: "0 -14px" }}>
          <Image
            src="/images/phone_home.avif"
            alt="Tampilan beranda aplikasi Ayocuci"
            width={428}
            height={933}
            priority
            style={{
              width: "100%",
              height: "auto",
              filter: `drop-shadow(${shadows.card})`,
            }}
          />
        </div>
        <div
          style={{
            width: "32%",
            transform: "rotate(9deg) translate(-14px, 26px)",
            zIndex: 1,
          }}
        >
          <Image
            src="/images/phone_right.avif"
            alt="Layar laporan Ayocuci"
            width={384}
            height={610}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: radii.md,
              filter: `drop-shadow(${shadows.soft})`,
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: -64,
          backgroundColor: colors.white,
          boxShadow: "0 -24px 40px -20px rgba(20, 15, 10, 0.18)",
          paddingTop: 56,
          paddingBottom: 72,
        }}
      >
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 13.5,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: colors.orange,
              marginBottom: 12,
            }}
          >
            DIPERCAYA OLEH
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 4vw, 38px)",
              lineHeight: 1.2,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: colors.ink,
              marginBottom: 40,
            }}
          >
            Partner Kami
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="partners-track"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              width: "max-content",
            }}
          >
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                style={{
                  flex: "0 0 auto",
                  width: 230,
                  height: 116,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.white,
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  borderRadius: radii.md,
                  boxShadow: shadows.soft,
                  padding: 16,
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={190}
                  height={76}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 76,
                    objectFit: "contain",
                    transform: "scale(1.3)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .partners-track {
          animation: partners-scroll 30s linear infinite;
        }
        @keyframes partners-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
