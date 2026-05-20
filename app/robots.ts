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
        // crawlDelay: 0,
      },
      {
        userAgent: "bingbot",
        allow: "/",
        // crawlDelay: 1,
      },
    ],
    sitemap: [
      "https://jangid-interior.vercel.app/sitemap.xml",
      // "https://jangid-interior.vercel.app/sitemap-hindi.xml",
      // "https://jangid-interior.vercel.app/sitemap-marathi.xml",
      // "https://jangid-interior.vercel.app/sitemap-gujarati.xml",
    ],
    // host: "https://jangid-interior.vercel.app",
  };
}
