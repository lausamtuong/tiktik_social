/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    
  }
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['giaxeoto.vn','lh3.googleusercontent.com']
  },
  
}

module.exports = nextConfig
