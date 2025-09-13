/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  async rewrites() {
    const backend = process.env.BACKEND_URL || "http://localhost:4000";
    return [
      { source: "/api/:path*", destination: `${backend}/api/:path*` }
    ];
  }
};
export default nextConfig;
