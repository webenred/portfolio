import { useTranslations } from "next-intl";

export default function About()
{
  const t = useTranslations();

  return <section id="about" className="mb-16">
    <h2 className="text-3xl font-bold mb-4">{t("nav.about")}</h2>
    <p className="text-lg">{t("aboutMe")}</p>
  </section>
}