import Hero from "./sections/Hero";
import AboutIllumine from "../components/about/AboutIllumine";
import ComingSoon from '@/components/ui/ComingSoon';
import Image from "next/image";
// import Hero from "./sections/Hero";

/**
 * MODULE: Home Route (/)
 * 
 * DESCRIPTION:
 * This is the root page for the Illumine 2026 application. 
 * Currently, all routes are safely redirected to the modular <ComingSoon /> UI 
 * component while active development is underway.
 */
export default function Home() {
  return <ComingSoon />;
  
  // Upstream UI
  /*
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutIllumine />
    </div>
  );
  */
}
