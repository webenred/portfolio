import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactMeForm } from "./contact-me-form";
import constants from "@/data/constant";

export default function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("contactTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactMeForm
          trans={{
            name: t("form.name"),
            email: t("form.email"),
            message: t("form.message"),
            sendMessage: t("form.sendMessage"),
            success: t("form.success"),
            error: t("form.error"),
          }}
          type="GET IN TOUCH"
        />
        <div className="space-y-4">
          <p className="text-lg">{t("contactText")}</p>
          <div className="flex gap-4">
            <a
              href={constants.githubUrl}
              className="text-foreground hover:text-primary"
              aria-label={t("ariaLabel.github")}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={constants.linkedinUrl}
              className="text-foreground hover:text-primary"
              aria-label={t("ariaLabel.linkedin")}
            >
              <Linkedin className="w-6 h-6" target="blank"/>
            </a>
            <a
              href={`mailto:${constants.emailAddress}`}
              className="text-foreground hover:text-primary"
              aria-label={t("ariaLabel.mail")}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
