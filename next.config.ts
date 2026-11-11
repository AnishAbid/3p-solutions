import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async redirects() {
    return [
      {
        source: "/practices",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/practices/it",
        destination: "/renewables",
        permanent: false,
      },
      {
        source: "/practices/engineering",
        destination: "/projects",
        permanent: false,
      },
      {
        source: "/practices/consulting",
        destination: "/municipal-services",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
