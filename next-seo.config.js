/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO Configuration
  async generateRobotsTxt() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
          allow: ["/pricing", "/contact"],
          disallow: ["/api/", "/_next/", "/node_modules/", "/.git/"],
          crawlDelay: 1,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          allow: ["/pricing", "/contact"],
          crawlDelay: 1,
        },
        {
          userAgent: "Bingbot",
          allow: "/",
          allow: ["/pricing", "/contact"],
          crawlDelay: 1,
        },
      ],
      sitemap: "https://maskani.ke/sitemap.xml",
      host: "https://maskani.ke",
    }
  },

  async generateSitemaps() {
    return [
      {
        loc: "https://maskani.ke/sitemap.xml",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 1.0,
      },
    ]
  },

  // Performance Optimization
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ["maskani.ke"],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/#dashboard",
        permanent: false,
      },
    ]
  },

  // Experimental Features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@mantine/core", "@tabler/icons-react"],
    scrollRestoration: true,
  },
}

module.exports = nextConfig
