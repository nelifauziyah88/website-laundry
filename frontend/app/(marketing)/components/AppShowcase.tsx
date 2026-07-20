import Image from "next/image";
import { colors, maxWidth, radii } from "../theme";

export default function AppShowcase() {
  return (
    <section
      id="aplikasi"
      style={{
        position: "relative",
        backgroundColor: colors.orange,
        padding: "100px 24px",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -140,
          left: "50%",
          transform: "translateX(-50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.peach} 0%, transparent 70%)`,
          opacity: 0.7,
        }}
      />

      <div
        style={{
          maxWidth,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: colors.orangeSoft,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          Tampilan Aplikasi
        </span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.4vw, 40px)",
            fontWeight: 500,
            color: colors.white,
            lineHeight: 1.15,
            marginTop: 12,
            marginBottom: 14,
          }}
        >
          Antarmuka yang rapi, dari kasir sampai laporan
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.6,
            maxWidth: 520,
            margin: "0 auto 64px",
          }}
        >
          Setiap layar dirancang supaya kasir baru sekalipun bisa langsung paham
          cara pakainya, tanpa perlu manual panjang.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 0,
          }}
          className="phones-row"
        >
          <div
            style={{
              width: 190,
              transform: "rotate(-8deg) translateY(30px)",
              zIndex: 1,
            }}
            className="phone-side"
          >
            <Image
              src="/images/phone_left.avif"
              alt="Layar transaksi Ayocuci"
              width={384}
              height={587}
              style={{ width: "100%", height: "auto", borderRadius: radii.lg }}
            />
          </div>
          <div style={{ width: 240, zIndex: 2, margin: "0 -20px" }}>
            <Image
              src="/images/fitur6.avif"
              alt="Layar detail fitur Ayocuci"
              width={384}
              height={717}
              style={{ width: "100%", height: "auto", borderRadius: radii.lg }}
            />
          </div>
          <div
            style={{
              width: 190,
              transform: "rotate(8deg) translateY(30px)",
              zIndex: 1,
            }}
            className="phone-side"
          >
            <Image
              src="/images/phone_right.avif"
              alt="Layar laporan Ayocuci"
              width={384}
              height={610}
              style={{ width: "100%", height: "auto", borderRadius: radii.lg }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .phone-side { display: none; }
        }
      `}</style>
    </section>
  );
}
