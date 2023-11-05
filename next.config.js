/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_SUPABASE_URLCONFIG}`,
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
