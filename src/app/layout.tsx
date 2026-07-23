import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig, projects } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://www.satwikmedipalli.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} — ${siteConfig.role} | 6 Live AI Products`,
  description: siteConfig.summary,
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "AI Agents",
    "RAG",
    "LangGraph",
    "Machine Learning",
    "Data Scientist",
    "Satwik Medipalli",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Six live AI & analytics products: multi-agent due diligence, calibrated LLM evaluation, reliability ML. Every one has a public URL.",
    url: siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Six live AI & analytics products. Every one has a public URL — nothing here is a mockup.",
  },
  robots: { index: true, follow: true },
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    url: siteUrl,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richardson",
      addressRegion: "TX",
    },
    alumniOf: "University of Texas at Dallas",
    knowsAbout: [
      "AI Engineering",
      "Large Language Models",
      "Multi-Agent Systems",
      "Machine Learning",
      "Data Science",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Engineer",
      skills: "LangGraph, CrewAI, RAG, XGBoost, Python, SQL",
    },
    subjectOf: projects.map((p) => ({
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      description: p.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
