import type { MetadataRoute } from "next";
import { restaurant } from "@/data/restaurant";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/contact", "/visit"];
  return routes.map((route) => ({
    url: `${restaurant.websiteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
