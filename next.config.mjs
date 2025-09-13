/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { serverActions: { allowedOrigins: ['*'] } },

  async rewrites() {
    // Proxy API calls from Next.js to your existing backend to avoid CORS.
    // Set BACKEND_URL in .env local or Render env (e.g. https://genius-backend.onrender.com)
    const backend = process.env.BACKEND_URL || "http://localhost:4000";
    return [
      { source: "/api/:path*", destination: `${backend}/api/:path*` }
    ];
  }
};
export default nextConfig;
