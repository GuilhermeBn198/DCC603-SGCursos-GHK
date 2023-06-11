/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.logrocket.com'
      },
      {
        protocol: 'https',
        hostname: 'www.holopin.io'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com'
      },
      {
        protocol: 'https',
        hostname: 'dcc-ufrr.app'
      },
      {
        protocol: 'https',
        hostname: 'lh4.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'instagram.fbvb2-1.fna.fbcdn.net'
      },
      {
        protocol: 'https',
        hostname: 'lh6.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'en.gravatar.com'
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
