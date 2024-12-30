import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations();

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("experienceTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("languages.title")}</CardTitle>
            <CardDescription>{t("languages.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>PHP</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              {/* <Badge>Python</Badge> */}
              <Badge>SQL</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("frontend.title")}</CardTitle>
            <CardDescription>{t("frontend.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>React</Badge>
              {/* <Badge>Next.js</Badge>
              <Badge>Vue.js</Badge>
              <Badge>Vite.js</Badge>
              <Badge>Alpine.js</Badge> */}
              <Badge>Inertia.js</Badge>
              {/* <Badge>MDX.js</Badge> */}
              {/* <Badge>Livewire</Badge> */}
              <Badge>Tailwind CSS</Badge>
              <Badge>Bootstrap</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("backend.title")}</CardTitle>
            <CardDescription>{t("backend.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Laravel</Badge>
              {/* <Badge>Livewire</Badge> */}
              {/* <Badge>FastAPI</Badge> */}
              <Badge>Node.js</Badge>
              {/* <Badge>Express.js</Badge> */}
              {/* <Badge>Flask</Badge> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("other.title")}</CardTitle>
            <CardDescription>{t("other.desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>MySQL</Badge>
              {/* <Badge>PostgreSQL</Badge> */}
              {/* <Badge>MongoDB</Badge> */}
              <Badge>Redis</Badge>
              {/* <Badge>Docker</Badge> */}
              {/* <Badge>AWS</Badge> */}
              {/* <Badge>Azure</Badge> */}
              {/* <Badge>GraphQL</Badge> */}
              <Badge>NginX</Badge>
              <Badge>Apache</Badge>
              <Badge>Git/Github</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
