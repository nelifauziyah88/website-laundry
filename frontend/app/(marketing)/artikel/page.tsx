"use client";

import Image from "next/image";
import Link from "next/link";
import { colors, maxWidth, radii, shadows } from "../theme";

function IconTrendingUp() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="15 7 21 7 21 13" />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2z" />
      <path d="M16 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
      <circle cx="16" cy="13" r="1.5" />
    </svg>
  );
}

function IconBarChart() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function IconReceipt() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </svg>
  );
}

function IconTrendingDown() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 7 9 13 13 9 21 17" />
      <polyline points="15 17 21 17 21 11" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.orangeDeep}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.ink}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "-3px", marginRight: 6 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke={colors.ink}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "-3px", marginRight: 6 }}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={colors.orangeDeep}
      stroke={colors.orangeDeep}
      strokeWidth="1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const contentBlocks = [
  {
    icon: IconTrendingUp,
    heading: "Laporan Omset",
    paragraph:
      "Laporan Omset membantu Anda mengetahui total penjualan laundry secara harian, mingguan, bulanan, hingga tahunan. Melalui laporan ini, Anda dapat:",
    list: [
      "Melihat total omset secara real-time",
      "Memantau pertumbuhan bisnis dari waktu ke waktu",
      "Membandingkan performa penjualan setiap periode",
      "Mengambil keputusan berdasarkan data yang akurat",
    ],
    closing:
      "Dengan mengetahui perkembangan omset secara rutin, Anda dapat lebih mudah menentukan strategi untuk meningkatkan penjualan.",
  },
  {
    icon: IconWallet,
    heading: "Laporan Pengeluaran",
    paragraph:
      "Keuntungan bisnis tidak hanya ditentukan oleh banyaknya transaksi, tetapi juga oleh seberapa baik Anda mengelola pengeluaran. Ayo Cuci menyediakan laporan pengeluaran yang memudahkan pencatatan berbagai biaya operasional seperti:",
    list: [
      "Pembelian deterjen dan parfum laundry",
      "Biaya listrik dan air",
      "Gaji karyawan",
      "Perawatan mesin laundry",
      "Pengeluaran operasional lainnya",
    ],
    closing:
      "Semua pengeluaran tercatat dengan rapi sehingga Anda dapat mengetahui ke mana saja uang bisnis digunakan.",
  },
  {
    icon: IconBarChart,
    heading: "Laporan Pendapatan",
    paragraph:
      "Ingin tahu layanan mana yang paling menghasilkan? Melalui Laporan Pendapatan, Anda dapat melihat detail pemasukan yang diperoleh dari setiap transaksi yang berhasil diselesaikan. Manfaatnya antara lain:",
    list: [
      "Mengetahui sumber pendapatan terbesar",
      "Melihat layanan yang paling diminati pelanggan",
      "Memantau performa usaha secara lebih detail",
      "Membantu menyusun strategi peningkatan keuntungan",
    ],
    closing: null,
  },
  {
    icon: IconReceipt,
    heading: "Laporan Piutang Pelanggan",
    paragraph:
      "Masih sering lupa pelanggan mana yang belum melunasi pembayaran? Ayo Cuci menyediakan Laporan Piutang Pelanggan yang membantu Anda mengelola tagihan dengan lebih mudah. Fitur ini memungkinkan Anda untuk:",
    list: [
      "Melihat daftar pelanggan yang memiliki piutang",
      "Mengetahui nominal yang belum dibayarkan",
      "Memantau status pelunasan pelanggan",
      "Mengurangi risiko piutang yang terlupakan",
    ],
    closing:
      "Dengan pengelolaan piutang yang lebih baik, arus kas bisnis laundry menjadi lebih sehat dan terkontrol.",
  },
  {
    icon: IconTrendingDown,
    heading: "Laporan Laba & Rugi",
    paragraph:
      "Inilah laporan yang paling penting untuk mengetahui kondisi bisnis Anda sebenarnya. Laporan Laba & Rugi di Ayo Cuci secara otomatis menghitung:",
    list: [
      "Total Omset",
      "Total Pendapatan",
      "Total Pengeluaran",
      "Total Keuntungan (Laba)",
      "Total Kerugian apabila pengeluaran lebih besar dari pendapatan",
    ],
    closing:
      "Tidak perlu lagi menghitung secara manual. Semua data tersaji otomatis sehingga Anda dapat langsung mengetahui apakah bisnis sedang untung atau perlu dilakukan evaluasi.",
  },
  {
    icon: IconRocket,
    heading: "Semua Laporan dalam Satu Dashboard",
    paragraph:
      "Keunggulan Ayo Cuci adalah seluruh laporan saling terintegrasi dalam satu sistem. Setiap transaksi yang dilakukan akan otomatis memengaruhi laporan omset, pendapatan, piutang, hingga laba rugi secara real-time. Tidak perlu lagi menggunakan banyak aplikasi atau mencatat secara manual. Semua informasi penting bisnis laundry tersedia dalam satu dashboard yang mudah dipahami.",
    list: [],
    closing: null,
  },
];

const relatedArticles = [
  {
    title:
      "Mengapa Ribuan Owner Laundry Mulai Beralih ke Ayo Cuci? Ini Alasannya",
    date: "6 Juli 2026",
    href: "/artikel/mengapa-ribuan-owner-laundry-mulai-beralih-ke-ayo-cuci-ini-alasannya",
  },
  {
    title:
      "Bayar Murah di Awal, Tapi Mau Pakai Fitur Harus Bayar Lagi? Owner Laundry Wajib Waspada!",
    date: "6 Juli 2026",
    href: "/artikel/bayar-murah-di-awal-tapi-mau-pakai-fitur-harus-bayar-lagi-owner-laundry-wajib-waspada",
  },
];

export default function ArtikelOmsetBesarBelumTentuUntung() {
  return (
    <article
      style={{ backgroundColor: colors.white, padding: "32px 24px 96px" }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>
        <Link
          href="/artikel"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 15,
            fontWeight: 600,
            color: colors.ink,
            marginBottom: 24,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.ink}
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M11 6l-6 6 6 6" />
          </svg>
          Kembali
        </Link>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: radii.lg,
            overflow: "hidden",
            boxShadow: shadows.card,
            marginBottom: 32,
          }}
        >
          <Image
            src="/images/artikel_omset_besar.jpeg"
            alt="Omset Besar Belum Tentu Untung! Cek Laporan Keuangan Laundry Secara Lengkap di Ayo Cuci"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 3.6vw, 40px)",
            fontWeight: 600,
            color: colors.ink,
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          Omset Besar Belum Tentu Untung! Cek Laporan Keuangan Laundry Secara
          Lengkap di Ayo Cuci
        </h1>

        <p style={{ fontSize: 14.5, color: colors.inkSoft, marginBottom: 36 }}>
          7 Juli 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {contentBlocks.map((block) => (
            <div key={block.heading}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.ink,
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <block.icon />
                {block.heading}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  color: colors.inkSoft,
                  lineHeight: 1.7,
                  marginBottom: block.list.length ? 12 : 0,
                }}
              >
                {block.paragraph}
              </p>
              {block.list.length > 0 && (
                <ul
                  style={{
                    margin: "0 0 12px",
                    paddingLeft: 22,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {block.list.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: 15.5,
                        color: colors.inkSoft,
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {block.closing && (
                <p
                  style={{
                    fontSize: 15.5,
                    color: colors.inkSoft,
                    lineHeight: 1.7,
                  }}
                >
                  {block.closing}
                </p>
              )}
            </div>
          ))}

          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 600,
                color: colors.ink,
                marginBottom: 10,
              }}
            >
              Saatnya Kelola Laundry Lebih Profesional
            </h2>
            <p
              style={{
                fontSize: 15.5,
                color: colors.inkSoft,
                lineHeight: 1.7,
                marginBottom: 10,
              }}
            >
              Dengan laporan Omset, Pengeluaran, Pendapatan, Piutang Pelanggan,
              dan Laba & Rugi yang lengkap, Ayo Cuci membantu owner laundry
              memahami kondisi bisnis secara lebih jelas dan mengambil keputusan
              yang lebih tepat. Jangan hanya fokus pada omset. Pastikan Anda
              juga mengetahui berapa keuntungan yang sebenarnya diperoleh setiap
              bulan.
            </p>
            <p
              style={{ fontSize: 15.5, color: colors.inkSoft, lineHeight: 1.7 }}
            >
              Kelola bisnis laundry lebih modern, lebih rapi, dan lebih
              menguntungkan bersama Ayo Cuci.
            </p>
          </div>

          <p
            style={{
              fontSize: 15.5,
              color: colors.ink,
              lineHeight: 1.7,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span>
              <IconPhone />
              WhatsApp: 0811 7003 0030
            </span>
            <span>
              <IconMail />
              Email: support@ayocuci.co.id
            </span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 40,
            paddingTop: 24,
            borderTop: `1px solid ${colors.line}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{ fontSize: 14.5, fontWeight: 500, color: colors.ink }}
            >
              Bagikan:
            </span>
            <a
              href="https://wa.me/?text=Omset%20Besar%20Belum%20Tentu%20Untung!"
              target="_blank"
              rel="noreferrer"
              aria-label="Bagikan ke WhatsApp"
              style={{
                width: 36,
                height: 36,
                borderRadius: radii.pill,
                backgroundColor: colors.orangeSoft,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#25D366"
                strokeWidth="1.8"
              >
                <path d="M6 18.5L4.5 21l2.6-1.4A8 8 0 1 0 4.5 13.5 8 8 0 0 0 6 18.5z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/sharer/sharer.php"
              target="_blank"
              rel="noreferrer"
              aria-label="Bagikan ke Facebook"
              style={{
                width: 36,
                height: 36,
                borderRadius: radii.pill,
                backgroundColor: colors.orangeSoft,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.95 8.44-9.94z" />
              </svg>
            </a>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: colors.inkSoft,
            }}
          >
            <span style={{ display: "inline-flex", gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </span>
            2.500+ Pengusaha
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <div
            style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: `1px solid ${colors.line}`,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 600,
                color: colors.ink,
                marginBottom: 16,
              }}
            >
              Artikel Terkait
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {relatedArticles.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "block",
                    padding: "16px 20px",
                    borderRadius: radii.md,
                    backgroundColor: "#F8F8F9",
                    color: colors.ink,
                  }}
                >
                  <div
                    style={{
                      fontSize: 15.5,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: colors.inkSoft }}>
                    {item.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: 48,
            background: `linear-gradient(135deg, ${colors.orange} 0%, ${colors.orangeDeep} 100%)`,
            borderRadius: radii.lg,
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 600,
              color: colors.white,
              marginBottom: 10,
            }}
          >
            Siap Kembangkan Bisnis Laundry Anda?
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 24,
            }}
          >
            Bergabunglah dengan ribuan pengusaha laundry yang telah
            bertransformasi ke digital.
          </p>
          <a
            href="/login"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: colors.white,
              color: colors.orangeDeep,
              fontWeight: 600,
              fontSize: 15.5,
              padding: "15px 32px",
              borderRadius: radii.pill,
            }}
          >
            Coba Gratis Sekarang
          </a>
        </div>
      </div>
    </article>
  );
}
