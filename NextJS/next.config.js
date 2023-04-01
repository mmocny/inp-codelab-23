const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = function(phase, { defaultConfig }) {
  const nextConfig = {
    experimental: {
      appDir: false,
      externalDir: true,
    },
    output: 'export',
    reactStrictMode: false,
  };

  if (phase === PHASE_PRODUCTION_BUILD) {
    nextConfig.assetPrefix = './';
  }

  return nextConfig
}