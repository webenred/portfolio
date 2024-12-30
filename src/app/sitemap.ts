import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en",
          fr: process.env.SITE_URL + "/fr",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/best-tour-travel-agency-website",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/best-tour-travel-agency-website",
          fr: process.env.SITE_URL + "/fr/best-tour-travel-agency-website",
        },
      },
    },
    {
      url: process.env.SITE_URL! + "/crti-project-management-app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en/crti-project-management-app",
          fr: process.env.SITE_URL + "/fr/crti-project-management-app",
        },
      },
    },
  ];
}
