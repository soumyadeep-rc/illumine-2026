"use client";

import React from 'react';
import Link from 'next/link';
import Center from '@/assets/coming_soon_svgs/svg/Center';
import Dot from '@/assets/coming_soon_svgs/svg/Dot';
import Group92 from '@/assets/coming_soon_svgs/svg/Group92';
import Group93 from '@/assets/coming_soon_svgs/svg/Group93';
import Frame30 from '@/assets/coming_soon_svgs/svg/Frame30';
import Vector2 from '@/assets/coming_soon_svgs/svg/Vector2';
import ComingSoonText from '@/assets/coming_soon_svgs/svg/ComingSoonText';

const Cross = ({ style }: { style?: React.CSSProperties }) => (
  <div className="absolute aspect-square" style={{ width: '1.25vw', ...style }}>
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 -translate-x-1/2"></div>
    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20 -translate-y-1/2"></div>
  </div>
);

export default function ComingSoon() {
  return (
    <div className="relative w-full h-[90vh] bg-[#0f0f0f] overflow-hidden" style={{ fontFamily: "'TT Lakes Neue Trial', sans-serif" }}>
      
      {/* Container holding the HUD, taking up 100% of the available space */}
      <div className="relative w-full h-full">
        
        {/* Center HUD with Slow Spin Animation */}
        <div className="absolute flex flex-col items-center justify-center" 
             style={{ 
               left: '27.77vw', 
               top: '5.18%', 
               width: '44.44vw', 
               height: '89.63%' 
             }}>
          
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <div style={{ animation: 'slow-spin 40s linear infinite', width: '100%', height: '100%' }} className="flex items-center justify-center">
              <Center />
            </div>
          </div>

          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
            <div className="drop-shadow-[0_0_20px_rgba(255,243,77,0.3)] scale-110" style={{ marginTop: '5%' }}>
              <ComingSoonText />
            </div>
            <h2 className="text-[#fff34d] font-bold tracking-[0.2em] opacity-90" style={{ fontSize: 'max(1vw, 1.2vh)', marginTop: '3%' }}>
              — UNDER CONSTRUCTION —
            </h2>
            <Link
              href="/"
              className="bg-[#6265fe] text-white font-bold tracking-[0.15em] hover:brightness-110 transition-all"
              style={{ 
                marginTop: '4%',
                padding: '1.5% 3%',
                fontSize: 'max(0.7vw, 1vh)', 
                clipPath: 'polygon(8% 0, 100% 0, 100% 65%, 92% 100%, 0 100%, 0 35%)' 
              }}
            >
              BACK TO HOME
            </Link>
          </div>
        </div>

        {/* Decorative Text Layers */}
        <div className="absolute text-[#fff34d] font-bold uppercase tracking-[0.35em] blur-[0.5px] z-40" 
             style={{ left: '24.86vw', top: '26.61%', fontSize: 'max(0.8vw, 1vh)' }}>
          IN PROGRESS
        </div>
        <div className="absolute text-[#fff34d] font-bold uppercase tracking-[0.35em] blur-[0.5px] z-40" 
             style={{ left: '68.4vw', top: '73.52%', fontSize: 'max(0.8vw, 1vh)' }}>
          UNDER CONSTRUCTION
        </div>

        {/* Terminal Logs */}
        <div className="absolute z-30 leading-[1.6] text-[#fff34d] blur-[0.5px] opacity-90" 
             style={{ left: '6.25vw', top: '46.91%', width: '20.13vw', fontSize: 'max(0.5vw, 0.7vh)' }}>
          <p>[11:42:03 | INIT ] SYSTEM BOOT STARTED</p>
          <p>[11:42:05 | LOAD ] CORE MODULES ONLINE</p>
          <p>[11:42:06 | LOAD ] AUX MODULE BBR-003 FAILED</p>
          <p>[11:42:07 | ERR  ] DEPENDENCY ERROR</p>
          <p style={{ marginTop: '1.5%' }}>[11:42:09 | NET  ] SCANNING NODES...</p>
          <p>[11:42:11 | NET  ] NODE 77AF91C2 FOUND</p>
          <p>[11:42:12 | AUTH ] AUTHENTICATION FAILED</p>
          <p>[11:42:14 | RETRY] ATTEMPT 02 FAILED</p>
        </div>

        <div className="absolute z-30 leading-[1.6] text-[#fff34d] blur-[0.5px] opacity-90 text-right" 
             style={{ right: '6.25vw', top: '31.51%', width: '20.13vw', fontSize: 'max(0.5vw, 0.7vh)' }}>
          <p>[03:17:08 | INIT ] BOOT SEQUENCE STARTED</p>
          <p>[03:17:10 | LOAD ] MODULE 554-002 LOADED</p>
          <p>[03:17:12 | LOAD ] MODULE 888-001 FAILED</p>
          <p>[03:17:15 | ERR  ] DEPENDENCY NOT FOUND</p>
          <p>[03:17:16 | WARN ] FALLBACK PROTOCOL ENABLED</p>
          <p>[03:17:17 | SYNC ] ATTEMPTING GRID LINK...</p>
          <p>[03:17:19 | FAIL ] GRID CONNECTION TIMEOUT</p>
          <p>[03:17:21 | RETRY] RETRY COUNT: 03</p>
        </div>

        {/* Alignment Crosses */}
        <Cross style={{ left: '24.3vw', top: '17.5%' }} />
        <Cross style={{ right: '24.3vw', top: '17.5%' }} />
        <Cross style={{ left: '24.3vw', bottom: '11.9%' }} />
        <Cross style={{ right: '24.3vw', bottom: '11.9%' }} />

        {/* Static Decorative SVGs */}
        <div className="absolute z-20 rotate-[180deg]" style={{ left: '10.08vw', top: '2%', width: '2.08vw' }}>
          <Dot />
        </div>
        <div className="absolute z-20" style={{ right: '8.68vw', bottom: '13.3%', width: '2.08vw' }}>
          <Dot />
        </div>
        <div className="absolute z-10 opacity-50" style={{ right: '27.08vw', top: '5.6%', width: '2.77vw' }}>
          <Vector2 />
        </div>
        <div className="absolute z-10 opacity-50" style={{ left: '27.08vw', bottom: '5.6%', width: '2.77vw', rotate: '180deg', opacity: 1
         }}>
          <Vector2 />
        </div>
        <div className="absolute z-10" style={{ bottom: '0.5%', left: '44.93vw', width: '10.41vw' }}>
          <Frame30 />
        </div>

        {/* Group 93 - Rotating arc gauges */}
        {/* Bottom-left gauge */}
        <div className="absolute z-10" style={{ bottom: '9%', left: '25.3vw', width: '15vw' }}>
          <div style={{ animation: 'slow-spin 30s linear infinite', transformOrigin: '43% 38.5%' }}>
            <Group93 />
          </div>
        </div>

        {/* Top-right gauge */}
        <div className="absolute z-10" style={{ top: '23.8%', right: '21.52vw', width: '8vw' }}>
          <div style={{ animation: 'slow-spin 30s linear infinite', transformOrigin: '43% 38.5%' }}>
            <Group93 />
          </div>
        </div>
        
      </div>
    </div>
  );
}
