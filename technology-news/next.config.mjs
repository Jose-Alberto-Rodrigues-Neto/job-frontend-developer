/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
          {
            protocol: "http",
            hostname: "*",
          },
        ],
        domains: ['community.wolfram.com', 'www.sspnet.org'],
      }
};

export default nextConfig;
