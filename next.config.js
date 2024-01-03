/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-minio.supernovacorp.ltd",
      },
    ],
  },
};

module.exports = nextConfig;
