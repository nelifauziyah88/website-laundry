import Image from "next/image";
import { colors, maxWidth, radii, shadows } from "../theme";

const steps = [
  {
    number: "01",
    image: "/images/Step1.webp",
    title: "Daftar & buat profil outlet",
    description:
      "Buat akun, isi data outletmu, lalu langsung masuk ke dashboard utama untuk mulai mengelola bisnis laundry."
  },
  {
    number: "02",
    image: "/images/Step2.webp",
    title: "Coba semua fitur di masa trial",
    description:
      "Rasakan pengalaman penuh Ayocuci selama masa trial, tanpa perlu bayar dan tanpa risiko."
  },
  {
    number: "03",
    image: "/images/Step3.webp",
    title: "Aktifkan outlet PRO, gratis selamanya",
    description:
      "Sekali aktivasi, outletmu aktif selamanya. Lisensi permanen, tanpa biaya berlangganan bulanan."
  },
  {
    number: "04",
    image: "/images/Step4.webp",
    title: "Tambah fitur sesuai kebutuhan",
    description:
      "Butuh laporan lebih detail atau slot pegawai tambahan? Aktifkan hanya fitur yang benar-benar kamu perlukan."
  }
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" style={{ padding: "96px 24px", backgroundColor: colors.white }}>
      <div style={{ maxWidth, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: colors.orangeDeep,
              textTransform: "uppercase",
              letterSpacing: "0.06em"
            }}
          >
            Cara Kerja
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.4vw, 40px)",
              fontWeight: 500,
              color: colors.ink,
              lineHeight: 1.15,
              marginTop: 12
            }}
          >
            Dari daftar sampai jalan, cuma empat langkah
          </h2>
          <p style={{ fontSize: 16, color: colors.inkSoft, marginTop: 14, lineHeight: 1.6 }}>
            Tidak perlu instalasi rumit atau training berhari-hari. Outletmu
            bisa langsung siap pakai hari ini juga.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div key={step.number} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  borderRadius: radii.lg,
                  overflow: "hidden",
                  boxShadow: shadows.card,
                  marginBottom: 20,
                  border: `1px solid ${colors.line}`
                }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={420}
                  height={860}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: colors.orange,
                  marginBottom: 8
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 500,
                  color: colors.ink,
                  marginBottom: 8,
                  lineHeight: 1.35
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.inkSoft, lineHeight: 1.55 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1040px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
