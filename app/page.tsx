import Hero from "./sections/Hero";
import AboutIllumine from "../components/about/AboutIllumine";
import ComingSoon from '@/components/ui/ComingSoon';
import Image from "next/image";
//import Hero from "./sections/Hero";

/**
 * MODULE: Home Route (/)
 * 
 * DESCRIPTION:
 * This is the root page for the Illumine 2026 application. 
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutIllumine />
    </div>
  );
}
