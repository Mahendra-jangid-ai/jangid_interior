import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/static/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "bingbot",
        allow: "/",
        crawlDelay: 1,
      },
    ],
    sitemap: [
      "https://sk-interior.vercel.app/sitemap.xml",
      "https://sk-interior.vercel.app/sitemap-hindi.xml",
      "https://sk-interior.vercel.app/sitemap-marathi.xml",
    ],
    host: "https://sk-interior.vercel.app",
  };
}
