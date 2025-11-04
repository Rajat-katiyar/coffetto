/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exclude Vite config files from compilation
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/vite.config.*', '**/vite-env.d.ts'],
    }
    return config
  },
}

module.exports = nextConfig

