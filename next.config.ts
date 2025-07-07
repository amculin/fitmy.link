import type { NextConfig } from "next";

interface RedirectItem {
  source: string;
  destination: string;
}

const nextConfig: NextConfig = {
  async redirects() {
    if (!process.env.REDIRECTS_DATA) {
      console.warn("REDIRECTS_DATA environment variable is not set.");
      return [];
    }

    try {
      const redirectsData: RedirectItem[] = JSON.parse(process.env.REDIRECTS_DATA);

      return redirectsData.map((item: RedirectItem) => ({
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
