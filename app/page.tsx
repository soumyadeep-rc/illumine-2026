import Hero from "./sections/Hero";
import AboutIllumine from "../components/about/AboutIllumine";

/**
 * MODULE: Home Route (/)
 * * DESCRIPTION:
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