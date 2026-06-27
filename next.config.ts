import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next 15 devtools + webpack HMR corrupt the client manifest and cause 500s.
  experimental: {
    devtoolSegmentExplorer: false,
  },
  devIndicators: false,
};

export default nextConfig;
