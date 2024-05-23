/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // Add placehold.co as an allowed domain for images
  },
};

export default nextConfig;
