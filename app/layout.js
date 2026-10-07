import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const url = "https://raviyadav.design";

export const metadata = {
  metadataBase: new URL(url),
  title: "Ravi Yadav | Senior UI/UX Designer | Product Designer",
  description:
    "Ravi Yadav is a Senior UI/UX Designer & Product Designer with 12+ years of experience designing intuitive, user-centered digital interfaces, design systems, and frontend web applications.",
  keywords: ["Ravi Yadav", "UI/UX Designer", "Product Designer", "Infowind Technologies", "Figma", "Adobe XD", "Fibe", "Design Systems", "React.js", "Tailwind CSS"],
  openGraph: {
    title: "Ravi Yadav | Senior UI/UX Designer | Product Designer",
    description: "12+ years of experience creating intuitive, user-centered digital experiences.",
    url,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#F0F6FE" };

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ravi Yadav",
    jobTitle: "Senior UI/UX Designer | Product Designer",
    url,
  };
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
