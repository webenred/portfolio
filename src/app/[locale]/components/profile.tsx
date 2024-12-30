import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import { HireMe } from "./hire-me";
import ProfileImg from "@/assets/profile/profile.jpg"
import Link from "next/link";
import Image from "next/image";

export default function Profile() {
  const t = useTranslations();

  return (
    <section id="profile" className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src={ProfileImg}
          alt="profile picture"
          className="w-64 h-64 rounded-full object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-2">{t("name")}</h2>
          <p className="text-xl text-muted-foreground mb-4">{t("role")}</p>
          <p className="text-lg mb-4">{t("intro")}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>PHP</Badge>
            <Badge>Laravel</Badge>
            <Badge>JavaScript</Badge>
            <Badge>React</Badge>
            <Badge>Tailwind.css</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/#contact">
              <Button>
                <Mail className="mr-2 h-4 w-4" /> {t("contactMe")}
              </Button>
            </Link>
            <HireMe
              trans={{
                hireMe: t("hireMe"),
                hireMeTitle: t("hireMeTitle"),
                hireMeDescription: t("hireMeDescription"),
                name: t("form.name"),
                email: t("form.email"),
                message: t("form.message"),
                sendMessage: t("form.sendMessage"),
                success: t("form.success"),
                error: t("form.error"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
