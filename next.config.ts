import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    if (!process.env.REDIRECTS_DATA) {
      console.warn("REDIRECTS_DATA environment variable is not set.");
      return [];
    }

    try {
      const redirectsData = JSON.parse(process.env.REDIRECTS_DATA);
      return redirectsData.map(item => ({
        source: item.source,
        destination: item.destination,
        permanent: true,
      }));
    } catch (error) {
      console.error("Failed to parse REDIRECTS_DATA:", error);
      return [];
    }
  },
};

export default nextConfig;
