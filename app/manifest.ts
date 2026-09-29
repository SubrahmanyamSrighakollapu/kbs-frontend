import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KBS Group",
    short_name: "KBS Group",
    description: "One Group. Every Solution.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#03142B",
    icons: [{ src: "/kbs-group-favicon.png", sizes: "any", type: "image/png" }],
  };
}