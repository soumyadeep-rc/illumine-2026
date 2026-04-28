import Image from "next/image";
import Hero from "./sections/Hero";

/**
 * MODULE: Home Route (/)
 * 
 * DESCRIPTION:
 * This is the root page for the Illumine 2026 application. 
 */
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
    </div>
  );
}
