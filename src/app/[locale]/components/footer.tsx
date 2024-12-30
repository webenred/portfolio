import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} {t("name")}. {t("footer")}
        </p>
      </div>
    </footer>
  );
}
