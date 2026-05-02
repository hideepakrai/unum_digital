import type { Metadata } from "next";
import HomePage from "@/pages/HomePage";
import { resolvePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata({
    routeKey: "home",
    routePath: "/",
    fallbackTitle: "Unum Digital | Creative Direction & Strategy Agency",
    fallbackDescription: "Unum Digital provides world-class creative direction, strategic branding, high-performance web experiences, and cinematic video production for brands that need systems and scale.",
  });
}

export default function Page() {
  return <HomePage />;
}
