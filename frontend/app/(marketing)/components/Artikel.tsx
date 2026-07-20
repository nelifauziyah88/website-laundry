import Image from "next/image";
import { colors, maxWidth, radii, shadows } from "../theme";

const articles = [
  {
    image: "/images/artikel_omset_besar.jpeg",
    title: "Omset Besar Belum Tentu Untung! Cek Laporan Keuangan Laundry Secara Lengkap di Ayo Cuci",
    description:
      "Banyak owner laundry merasa usahanya berjalan lancar karena omset terus bertambah setiap bulan. Namun kenyataannya, omset besar belum tentu berarti bisnis benar-benar\u2026",
    date: "7 Juli 2026"
  }
];

export default function Artikel() {
  return (
    <section id="artikel" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: colors.orangeDeep,
              textTransform: "uppercase",
              letterSpacing: "0.06em"
            }}
          >
            Artikel
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 500,
              color: colors.ink,
              lineHeight: 1.2,
              marginTop: 12
            }}
          >
            Artikel dan Kabar Terbaru AyoCuci
          </h2>
        </div>

        {articles.map((article) => (
          <div
            key={article.title}
            style={{
              backgroundColor: "#F8F8F9",
              borderRadius: radii.lg,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0
            }}
            className="artikel-card"
          >
            <div style={{ position: "relative", minHeight: 320 }} className="artikel-image">
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
              className="artikel-content"
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  fontWeight: 500,
                  color: colors.ink,
                  lineHeight: 1.3,
                  marginBottom: 16
                }}
              >
                {article.title}
              </h3>
              <p style={{ fontSize: 15, color: colors.inkSoft, lineHeight: 1.65, marginBottom: 24 }}>
                {article.description}
              </p>
              <div style={{ fontSize: 13.5, color: colors.inkSoft, marginBottom: 24 }}>{article.date}</div>
              <a
                href="#artikel"
                style={{
                  display: "inline-block",
                  backgroundColor: colors.orange,
                  color: colors.white,
                  fontWeight: 500,
                  fontSize: 15,
                  padding: "14px 28px",
                  borderRadius: radii.pill,
                  boxShadow: shadows.soft,
                  width: "fit-content"
                }}
              >
                Baca Sekarang
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .artikel-card { grid-template-columns: 1fr !important; }
          .artikel-image { min-height: 240px !important; }
          .artikel-content { padding: 32px 28px !important; }
        }
      `}</style>
    </section>
  );
}