import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de desempenho
  experimental: {
    optimizePackageImports: ['@/components', 'lucide-react'],
  },
  
  // Compressão de imagens
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60
  },
  
  // Configurações de compilação
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Configurações de webpack
  webpack: (config, { isServer }) => {
    // Reduzir tamanho do bundle
    config.optimization.minimize = true;
    
    // Desabilitar polyfills desnecessários no cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  }
};

export default nextConfig;