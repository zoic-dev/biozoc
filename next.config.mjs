/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biozoc.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.biozoc.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },
};

export default nextConfig;
