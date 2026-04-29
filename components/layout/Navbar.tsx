'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mechsuit, ttLakes } from './fonts';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'MAGAZINE', href: '/magazine' },
  { label: 'ALUMNI', href: '/alumni' },
  { label: 'CONTACT US', href: '/contact-us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          ttLakes.className,
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(123,97,255,0.08)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        {/* Top scanline accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B61FF]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 group flex flex-col">
            <span
              className={[
                'text-[1.35rem] tracking-[0.22em] text-white',
                'group-hover:text-[#7B61FF] transition-colors duration-300',
                mechsuit.className,
              ].join(' ')}
            >
              ILLUMINE
            </span>
            <div className="h-px w-0 group-hover:w-full bg-[#7B61FF] transition-all duration-300 mt-px" />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={[
                    'group relative px-4 py-1.5 text-[11px] font-medium tracking-[0.15em]',
                    'transition-all duration-300 rounded-sm',
                    isActive
                      ? 'bg-[#6265fe] text-white'
                      : 'text-white/70 hover:text-white',
                  ].join(' ')}
                >
                  {!isActive && (
                    <>
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[#7B61FF]/80 transition-all duration-300" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[#7B61FF]/80 transition-all duration-300" />
                    </>
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/login"
              className="group relative px-5 py-1.5 text-[11px] font-medium tracking-[0.15em] bg-[#6265fe] text-white rounded-sm hover:bg-[#7B61FF] transition-colors duration-300 overflow-hidden"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              LOG IN
            </Link>

            <Link
              href="/signup"
              className="group relative px-5 py-1.5 text-[11px] font-medium tracking-[0.15em] border border-white/50 text-white rounded-sm hover:border-[#7B61FF] hover:text-[#7B61FF] transition-all duration-300"
            >
              <span className="absolute top-0.5 left-0.5 w-[3px] h-[3px] bg-white/30 group-hover:bg-[#7B61FF]/80 transition-colors duration-300" />
              <span className="absolute bottom-0.5 right-0.5 w-[3px] h-[3px] bg-white/30 group-hover:bg-[#7B61FF]/80 transition-colors duration-300" />
              SIGN UP
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen ? 'true' : 'false'}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          >
            <span className={['block h-px bg-white transition-all duration-300 origin-center', mobileOpen ? 'w-full rotate-45 translate-y-[6px]' : 'w-full'].join(' ')} />
            <span className={['block h-px bg-white transition-all duration-300', mobileOpen ? 'opacity-0 w-0' : 'w-3/4'].join(' ')} />
            <span className={['block h-px bg-white transition-all duration-300 origin-center', mobileOpen ? 'w-full -rotate-45 -translate-y-[6px]' : 'w-1/2'].join(' ')} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={[
          'fixed inset-0 z-40 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={[
            'absolute top-16 left-0 right-0 bg-black/90 border-b border-white/10',
            'transition-transform duration-300',
            ttLakes.className,
            mobileOpen ? 'translate-y-0' : '-translate-y-2',
          ].join(' ')}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#7B61FF]/50 to-transparent" />

          <div className="px-6 py-6 flex flex-col gap-1">
            <p className="text-[10px] tracking-[0.25em] text-[#555555] uppercase mb-3">
              {'>> /root/nav_links'}
            </p>

            {navLinks.map((link, i) => {
              const isActive = activeLink === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.label);
                    setMobileOpen(false);
                  }}
                  className={[
                    'flex items-center gap-3 py-3 border-b border-white/5',
                    'text-sm tracking-[0.12em] transition-colors duration-200',
                    isActive ? 'text-[#7B61FF]' : 'text-white/70 hover:text-white',
                  ].join(' ')}
                >
                  <span className="text-[#444444] text-xs font-mono w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
                  )}
                </Link>
              );
            })}

            <div className="flex gap-3 mt-5">
              <Link
                href="/login"
                className="flex-1 py-2.5 text-center text-[11px] tracking-[0.15em] font-medium bg-[#6265fe] text-white rounded-sm hover:bg-[#7B61FF] transition-colors duration-300"
              >
                LOG IN
              </Link>
              <Link
                href="/signup"
                className="flex-1 py-2.5 text-center text-[11px] tracking-[0.15em] font-medium border border-white/40 text-white rounded-sm hover:border-[#7B61FF] hover:text-[#7B61FF] transition-all duration-300"
              >
                SIGN UP
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-[#555555] uppercase">
                SYS_STATUS: ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}