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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
    </div>
  );
  */
}
