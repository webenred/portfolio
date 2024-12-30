import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-8">
        <Link href="/#projects" passHref>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="ltr:mr-2 ml-2 h-4 w-4" /> {t("backToPortfolio")}
          </Button>
        </Link>
        <article className="prose lg:prose-lg w-full max-w-none">
          {children}
        </article>
      </main>
    </div>
  );
}
