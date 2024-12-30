import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import CrtiImg from "@/assets/projects/crti-project-management-app/landing_page.png";
import EcommerceImg from "@/assets/projects/e-commerce-management-application/img.png";
import BestTourImg from "@/assets/projects/best-tour-travel-agency-website/img.png";
import SagimexProImg from "@/assets/projects/sagimex-pro-business-website/img.png";
import HotelSidiElNouiImg from "@/assets/projects/hotel-sidi-el-noui/img.png";
import DmtEntvImg from "@/assets/projects/dmtentv-app/img.png";
import EventPlusImg from "@/assets/projects/event-plus-app/img.png";
import SaasStarterKitImg from "@/assets/projects/saas-starter-kit-template/img.png";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Project = {
  slug: string;
  img: StaticImageData;
  url?: string;
  type: "github" | "live-demo" | "no-link" | "slug";
};

const projects: Project[] = [
  {
    slug: "crti-project-management-app",
    img: CrtiImg,
    type: "slug",
  },
  // {
  //   slug: "saas-starter-kit-template",
  //   img: SaasStarterKitImg,
  //   type: "github",
  //   url: "https://github.com/duobix-software/Multi-tenancy-saas-template"
  // },
  // {
  //   slug: "event-plus-app",
  //   img: EventPlusImg,
  //   type: "no-link",
  // },
  // {
  //   slug: "hotel-sidi-el-noui-app",
  //   img: HotelSidiElNouiImg,
  //   type: "no-link",
  // },
  // {
  //   slug: "entv-vehicle-management-system",
  //   img: DmtEntvImg,
  //   type: "no-link",
  // },
  // {
  //   slug: "e-commerce-management-application",
  //   img: EcommerceImg,
  //   type: "slug",
  // },
  {
    slug: "best-tour-travel-agency-website",
    img: BestTourImg,
    type: "slug",
  },
  // {
  //   slug: "sagimex-pro-business-website",
  //   url: "https://sagimexpro.dz",
  //   img: SagimexProImg,
  //   type: "live-demo",
  // },
];

export default function Projects() {
  const t = useTranslations();
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("projectsTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            slug={project.slug}
            url={project.url}
            type={project.type}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ slug, url, img, type }: Project) {
  const m = useTranslations();
  const t = useTranslations(`projects.${slug}`);

  const linkProps = React.useMemo(() => {
    if (type === "no-link") return null;

    if (type === "github" || type === "live-demo")
      return {
        href: url || "#",
        target: "_blank"
      };

    return {
      href: `/projects/${slug}`,
      passHref: true,
    };
  }, [type]);

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
      {linkProps ? (
        <Link {...linkProps}>
          <Image
            src={img}
            alt={`image ${t("name")}`}
            className="w-full h-52 object-cover object-top hover:scale-110 transition-all duration-150"
          />
        </Link>
      ) : (
        <Image
          src={img}
          alt={`image ${t("name")}`}
          className="w-full h-52 object-cover object-top hover:scale-110 transition-all duration-150"
        />
      )}

      <div className="p-4 pb-0">
        <h3 className="text-xl font-semibold mb-2">{t("name")}</h3>
        <p className="text-muted-foreground mb-4">{t("description")}</p>
      </div>

      <div className="pb-4 mt-auto flex justify-center">
        {linkProps ? (
          <Link {...linkProps}>
            <Button>
              {type === "github" ? m("checkGithub") : type === "live-demo" ? m("liveDemo") : m("viewProject")}
            </Button>
          </Link>
        ) : (
          <Button variant="secondary">{m("isnt-ready")}</Button>
        )}
      </div>
    </div>
  );
}
