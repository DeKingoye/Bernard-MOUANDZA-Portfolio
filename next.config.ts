// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sortie "standalone" => bundle serveur minimal parfait pour Docker
  output: "standalone",

  // Autorise les images distantes (garde large si ton portfolio charge depuis divers CDNs)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }, // retire-le si tu n'as pas d'images en http
    ],
  },

  // Si tu veux aller au bout même avec des avertissements/erreurs pendant la phase init :
  // (Tu peux remettre à true/false selon ta tolérance)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
