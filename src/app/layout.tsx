import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://jomingeorgeattayil.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jomin George Attayil — Data Analyst → Data Engineer",
    template: "%s — Jomin George Attayil",
  },
  description:
    "Senior Data Analyst transitioning into Data Engineering. Freelance data visualization, app development, and web craft under @thinkwithjomin.",
  keywords: [
    "Jomin George Attayil",
    "Data Analyst",
    "Data Engineer",
    "thinkwithjomin",
    "Power BI",
    "Azure Data Engineering",
    "Freelance Developer Kerala",
  ],
  authors: [{ name: "Jomin George Attayil" }],
  creator: "Jomin George Attayil",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jomin George Attayil — Data Analyst → Data Engineer",
    description:
      "Senior Data Analyst transitioning into Data Engineering. Freelance data visualization, app development, and web craft under @thinkwithjomin.",
    siteName: "Jomin George Attayil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jomin George Attayil — Data Analyst → Data Engineer",
    description:
      "Senior Data Analyst transitioning into Data Engineering. Freelance data visualization, app development, and web craft under @thinkwithjomin.",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isLight = stored === 'light';
    document.documentElement.classList.toggle('dark', !isLight);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        {children}
      </body>
    </html>
  );
}
