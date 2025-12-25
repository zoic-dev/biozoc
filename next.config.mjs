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

  async redirects() {
    return [
      // {
      //   source: "/third-party-manufacturing-of-ayurvedic-products",
      //   destination: "/third-party-manufacturing",
      //   permanent: true
      // },

    ]
  }
};

export default nextConfig;
