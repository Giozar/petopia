import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd22po4pjz3o32e.cloudfront.net',
        port: '', // Si es necesario especificar un puerto, agrégalo aquí
        pathname: '/**', // Permite cualquier ruta dentro del dominio
      },
    ],
  },
};

export default nextConfig;
