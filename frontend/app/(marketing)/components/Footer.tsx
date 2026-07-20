import Image from "next/image";
import { colors, maxWidth } from "../theme";

const columns = [
  {
    title: "Produk",
    links: ["Fitur", "Cara Kerja", "Tampilan Aplikasi", "Aktivasi PRO"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Blog", "Karier", "Kontak"],
  },
  {
    title: "Bantuan",
    links: [
      "Pusat Bantuan",
      "Panduan Penggunaan",
      "Kebijakan Privasi",
      "Syarat & Ketentuan",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: colors.orangeSoft, padding: "64px 24px 32px" }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 32,
            paddingBottom: 40,
            borderBottom: `1px solid ${colors.line}`,
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                backgroundColor: colors.white,
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 10,
                marginBottom: 16,
              }}
            >
              <Image
                src="/images/LogoAycuci.avif"
                alt="Ayocuci"
                width={110}
                height={31}
              />
            </div>
            <p
              style={{
                fontSize: 13.5,
                color: colors.inkSoft,
                lineHeight: 1.6,
                maxWidth: 260,
              }}
            >
              Aplikasi kasir laundry modern untuk membantu usaha kecil dan
              menengah mengelola bisnis lebih praktis.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <div
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: colors.ink,
                  marginBottom: 16,
                }}
              >
                {column.title}
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#top"
                    style={{ fontSize: 13.5, color: colors.inkSoft }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12.5, color: colors.inkSoft }}>
            © {new Date().getFullYear()} Ayocuci.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
