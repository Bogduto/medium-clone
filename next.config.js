/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: process.env.NEXT_APP_GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.NEXT_APP_GOOGLE_CLIENT_SECRET,
    OSU_CLIENT_ID: process.env.NEXT_APP_OSU_CLIENT_ID,
    OSU_CLIENT_SECRET: process.env.NEXT_APP_OSU_CLIENT_SECRET
  }
}

module.exports = nextConfig
