/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'i.imgur.com']
  },
  experimental:{
    images:{
      allowFutureImage: true
    }
  },
  i18n:{
    locales: ["en"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
