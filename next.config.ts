import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin-api/:path*",
        destination: `${process.env.BACKEND_API_URL || "http://localhost:5000"}/:path*`,
      },
    ];
  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;