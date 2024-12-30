import "../globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { useLocale } from "next-intl";
import Navbar from "@/app/[locale]/components/navbar";
import Footer from "./components/footer";
import { getTranslations } from "next-intl/server";
import Providers from "../providers";
import { Toaster } from "sonner";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    // metadataBase: new URL(process.env.SITE_URL!),
    title: t("title"),
    description: t("description"),
    keywords:
      "Reda Benabbas, software developer, web development, PHP, Laravel, JavaScript, MySQL, portfolio, web applications, frontend development, backend development",
    applicationName: "My Portfolio",
    authors: {
      name: "Reda Benabbas",
      url: "https://reda-benabbas.vercel.app",
    },
    generator: "Next.js",
    creator: "Reda Benabbas",
    robots: "index, follow",
    openGraph: {
      siteName: "Reda Benabbas Portfolio's",
      title: t("title"),
      description: t("og-description"),
      type: "website",
      url: "https://reda-benabbas.vercel.app",
      images: t("preview-image"),
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta
          name="google-site-verification"
          content="yOZjx0tfJnSMoBstTi-z9hjnbeuy3EwSmWCT--g5Axg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="7b6bee92-56d3-4adc-8b36-dfb1c7517c39"></script>
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Toaster richColors />
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
