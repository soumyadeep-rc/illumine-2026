import React from 'react';

/**
 * STEP 1: Global Footer Structure
 * A minimal footer component to close out the global layout. 
 * Flexible padding and text sizes keep it consistently proportioned.
 */
export default function Footer() {
  return (
    <footer className="w-full h-[5vh] min-h-[40px] flex items-center justify-center border-t border-white/10 z-50">
      <p className="text-[#fff34d] text-[10px] md:text-[12px] tracking-[0.1em] opacity-50">
        &copy; {new Date().getFullYear()} ILLUMINE. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
