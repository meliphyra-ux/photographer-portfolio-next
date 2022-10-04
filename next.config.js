/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.mos.cms.futurecdn.net', 'photocasa.ru']
  },
  experimental:{
    images:{
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
