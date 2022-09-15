/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['giaxeoto.vn','lh3.googleusercontent.com']
  },
  source: '/api/:path*',
  destination: 'http://localhost:4000/:path*
}

module.exports = nextConfig
