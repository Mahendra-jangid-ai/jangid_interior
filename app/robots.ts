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
      "https://jangidinterior.com/sitemap.xml",
      "https://jangidinterior.com/sitemap-hindi.xml",
      "https://jangidinterior.com/sitemap-marathi.xml",
      "https://jangidinterior.com/sitemap-gujarati.xml",
    ],
    host: "https://jangidinterior.com",
  };
}
