/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
        permanent: false,
      },
      {
        source: '/resume',
        destination: process.env.NEXT_PUBLIC_RESUME_URL,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
