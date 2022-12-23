/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [
    {
      source: '/:api*',
      destination: `http://localhost:8000/:api*`,
    },
  ],
};

module.exports = nextConfig;
