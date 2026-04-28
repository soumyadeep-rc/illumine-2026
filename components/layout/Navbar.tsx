import React from 'react';
import Link from 'next/link';

/**
 * STEP 1: Global Navigation Structure
 * This Navbar component wraps the core navigation links and branding for the entire application.
 * Using a responsive width and flexbox ensures the elements space evenly across all screen sizes.
 */
export default function Navbar() {
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-[4vw] z-50">
      {/* Brand Section */}
      <span className="text-white text-[1.5rem] md:text-[22px] font-extrabold tracking-[0.2em] italic">
        ILLUMINE
      </span>

      {/* Primary Links */}
      <div className="hidden md:flex items-center gap-[2vw] text-[11px] font-semibold tracking-wider text-white/80">
        <Link href="/" className="px-[1.5vw] py-[0.5vw] min-w-[60px] text-center rounded-full bg-[#6265fe] text-white transition-opacity hover:opacity-90">HOME</Link>
        <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="/magazine" className="hover:text-white transition-colors">MAGAZINE</Link>
        <Link href="/alumni" className="hover:text-white transition-colors">ALUMNI</Link>
        <Link href="/contact-us" className="hover:text-white transition-colors">CONTACT US</Link>
      </div>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center gap-[1vw]">
        <button className="px-[1.5vw] py-[0.5vw] bg-[#6265fe] text-white text-[11px] font-bold tracking-wide rounded-sm transition-opacity hover:opacity-90">
          LOG IN
        </button>
        <button className="px-[1.5vw] py-[0.5vw] text-white text-[11px] font-bold tracking-wide border border-white rounded-sm hover:bg-white hover:text-black transition-colors">
          SIGN UP
        </button>
      </div>

      {/* Mobile Toggle Placeholder */}
      <div className="md:hidden flex items-center text-white cursor-pointer">
        <span className="text-2xl">☰</span>
      </div>
    </nav>
  );
}
