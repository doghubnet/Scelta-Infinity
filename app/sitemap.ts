import type { MetadataRoute } from "next";
import { company } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${company.domain}`;
  const routes = ["", "/books", "/affiliate-marketplace", "/services", "/about", "/contact", "/blog", "/privacy-policy", "/terms-of-service", "/affiliate-disclosure"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
