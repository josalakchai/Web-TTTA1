import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Tiger Team Academy",
  description:
    "The Tiger Team Academy เป็นสถาบันพัฒนาทักษะด้านเทคโนโลยีและนวัตกรรมดิจิทัล ที่มุ่งส่งเสริมศักยภาพของนักเรียน นักศึกษา และบุคลากรรุ่นใหม่ในสายงาน IT, Data, และผู้ประกอบการด้านเทคโนโลยี เราให้ความสำคัญกับการเรียนรู้เชิงปฏิบัติ การพัฒนาแนวคิดเชิงนวัตกรรม และการลงมือทำจริง เพื่อสร้างบุคลากรที่พร้อมแข่งขันในยุคเศรษฐกิจดิจิทัล นอกจากการฝึกอบรมทักษะด้านเทคโนโลยี เรายังเป็นศูนย์บ่มเพาะผู้ประกอบการดิจิทัล (Digital Innovation Incubator) ที่สนับสนุนแนวคิดธุรกิจใหม่ การสร้างผลิตภัณฑ์นวัตกรรม และการต่อยอดสู่สตาร์ทอัพที่มีศักยภาพในอนาคต",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/tiger-favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/tiger-favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/tiger-apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "The Tiger Team Academy",
    description:
      "The Tiger Team Academy เป็นสถาบันพัฒนาทักษะด้านเทคโนโลยีและนวัตกรรมดิจิทัล ที่มุ่งส่งเสริมศักยภาพของนักเรียน นักศึกษา และบุคลากรรุ่นใหม่ในสายงาน IT, Data, และผู้ประกอบการด้านเทคโนโลยี เราให้ความสำคัญกับการเรียนรู้เชิงปฏิบัติ การพัฒนาแนวคิดเชิงนวัตกรรม และการลงมือทำจริง เพื่อสร้างบุคลากรที่พร้อมแข่งขันในยุคเศรษฐกิจดิจิทัล นอกจากการฝึกอบรมทักษะด้านเทคโนโลยี เรายังเป็นศูนย์บ่มเพาะผู้ประกอบการดิจิทัล (Digital Innovation Incubator) ที่สนับสนุนแนวคิดธุรกิจใหม่ การสร้างผลิตภัณฑ์นวัตกรรม และการต่อยอดสู่สตาร์ทอัพที่มีศักยภาพในอนาคต",
    url: "https://thetigerteamacademy.net",
    siteName: "The Tiger Team Academy",
    images: [
      {
        url: "https://thetigerteamacademy.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Tiger Team Academy - สถาบันพัฒนาทักษะด้านเทคโนโลยีและนวัตกรรมดิจิทัล",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tiger Team Academy",
    description:
      "The Tiger Team Academy เป็นสถาบันพัฒนาทักษะด้านเทคโนโลยีและนวัตกรรมดิจิทัล ที่มุ่งส่งเสริมศักยภาพของนักเรียน นักศึกษา และบุคลากรรุ่นใหม่ในสายงาน IT, Data, และผู้ประกอบการด้านเทคโนโลยี เราให้ความสำคัญกับการเรียนรู้เชิงปฏิบัติ การพัฒนาแนวคิดเชิงนวัตกรรม และการลงมือทำจริง เพื่อสร้างบุคลากรที่พร้อมแข่งขันในยุคเศรษฐกิจดิจิทัล นอกจากการฝึกอบรมทักษะด้านเทคโนโลยี เรายังเป็นศูนย์บ่มเพาะผู้ประกอบการดิจิทัล (Digital Innovation Incubator) ที่สนับสนุนแนวคิดธุรกิจใหม่ การสร้างผลิตภัณฑ์นวัตกรรม และการต่อยอดสู่สตาร์ทอัพที่มีศักยภาพในอนาคต",
    images: ["https://thetigerteamacademy.net/og-image.jpg"],
    creator: "@thetigerteamacademy",
  },
  alternates: {
    canonical: "https://thetigerteamacademy.net",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "The Tiger Team Academy",
    "Tiger Team",
    "บ่มเพาะผู้ประกอบการ",
    "เทคโนโลยี",
    "ผู้ประกอบการด้านเทคโนโลยี",
    "สตาร์ทอัพ",
    "นวัตกรรม",
  ],
  authors: [{ name: "The Tiger Team Academy" }],
  creator: "The Tiger Team Academy",
  publisher: "The Tiger Team Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0R2WBYP8KX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0R2WBYP8KX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
