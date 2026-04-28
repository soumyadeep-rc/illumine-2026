'use client'
import React from 'react'
import Image from 'next/image'
import HeroBg from '@/public/photos/Hero/hero.png'
import { Oxanium } from 'next/font/google'
import {
    buttonClipPath,
    plusPathLines,
    smallCirclePaths,
    vtLinePaths,
} from '@/data/Paths/heroPaths'
import DecryptedText from '@/components/ui/DecryptedText'

import BlueCircle from '@/components/ui/BlueCircle'
import BigCircle from '@/components/ui/BigCircle'
import Countdown from '@/components/ui/Countdowm'
import GlitchLogo from '@/components/ui/GlitchLogo'

const oxanium = Oxanium({
    subsets: ['latin'],
    weight: [
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
    ],
})

type PlusPathProps = {
    className?: string;
};

const PlusPath: React.FC<PlusPathProps & { delay?: number }> = ({ className = "", delay = 0 }) => {
    return (
        <div className={`absolute h-4 aspect-square ${className}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <style>{`
                    @keyframes plusGlitchIn {
                        0%   { opacity: 0; }
                        10%  { opacity: 0.4; }
                        15%  { opacity: 0; }
                        25%  { opacity: 0.35; }
                        30%  { opacity: 0; }
                        45%  { opacity: 0.4; }
                        100% { opacity: 0.4; }
                    }
                    @keyframes plusBlink {
                        0%, 100% { opacity: 0.4; }
                        50%      { opacity: 0.12; }
                    }
                    .plus-glitch {
                        opacity: 0;
                        animation:
                            plusGlitchIn 0.6s ease-out ${delay}s forwards,
                            plusBlink 3.5s ease-in-out ${delay + 0.6}s infinite;
                    }
                `}</style>
                <line
                    className="plus-glitch"
                    x1={plusPathLines.vertical.x1} y1={plusPathLines.vertical.y1}
                    x2={plusPathLines.vertical.x2} y2={plusPathLines.vertical.y2}
                    stroke="white" strokeOpacity="1"
                />
                <line
                    className="plus-glitch"
                    y1={plusPathLines.horizontal.y1} x2={plusPathLines.horizontal.x2}
                    y2={plusPathLines.horizontal.y2}
                    stroke="white" strokeOpacity="1"
                    style={{ animationDelay: `${delay + 0.08}s` }}
                />
            </svg>
        </div>
    );
};

const SmallCircle: React.FC<PlusPathProps & { speedFactor?: number }> = ({ className = "", speedFactor = 1 }) => {
    const duration = (3.5 / speedFactor).toFixed(2);
    const animName = `circleSpin${speedFactor.toString().replace('.', '_')}`;

    return (
        <div className={`h-full aspect-square flex justify-center items-center ${className}`}>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-110"
            >
                <style>{`
                    @keyframes ${animName} {
                        from { transform: rotate(0deg); }
                        to   { transform: rotate(360deg); }
                    }
                    @keyframes segFade {
                        0%, 100% { opacity: 0.5; }
                        50%      { opacity: 0.28; }
                    }
                    .circle-group-${animName} {
                        animation:
                            ${animName} ${duration}s linear infinite,
                            segFade 2.8s ease-in-out infinite;
                    }
                `}</style>
                <g
                    className={`circle-group-${animName}`}
                    style={{ transformOrigin: '16px 16px' }}
                >
                    <path d={smallCirclePaths.top} fill="white" />
                    <path opacity="0.2" d={smallCirclePaths.right} fill="#909090" />
                    <path opacity="0.65" d={smallCirclePaths.bottom} fill="#909090" />
                </g>
            </svg>
        </div>
    );
};





const VtLine: React.FC<PlusPathProps> = ({ className = "" }) => {
    return (
        <div className={`absolute ${className}`}>
            <svg width="15" height="468" viewBox="0 0 15 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                <style>{`
                    @keyframes lineDraw {
                        from { stroke-dashoffset: 454; }
                        to   { stroke-dashoffset: 0; }
                    }
                    @keyframes linePulse {
                        0%, 100% { opacity: 0.5; }
                        50%      { opacity: 0.15; }
                    }
                    .vt-line {
                        stroke-dasharray: 454;
                        stroke-dashoffset: 454;
                        animation:
                            lineDraw 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                            linePulse 3s ease-in-out 1.4s infinite;
                    }
                    @keyframes arrowFadeIn {
                        from { opacity: 0; }
                        to   { opacity: 0.5; }
                    }
                    .vt-arrow {
                        opacity: 0;
                        animation: arrowFadeIn 0.3s ease-out 1.3s forwards;
                    }
                `}</style>
                <g>
                    <line
                        className="vt-line"
                        x1={vtLinePaths.line.x1}
                        y1={vtLinePaths.line.y1}
                        x2={vtLinePaths.line.x2}
                        y2="0"
                        stroke="white"
                    />
                    <path
                        className="vt-arrow"
                        d={vtLinePaths.arrow}
                        fill="white"
                        stroke="white"
                    />
                </g>
            </svg>
        </div>
    );
};


const Hero: React.FC = () => {
    return (
        <div className='h-screen w-full relative flex flex-col justify-center items-center gap-4'>
            <Image
                src={HeroBg}
                alt="Hero Background"
                fill
                className='object-cover absolute inset-0'
            />
            <GlitchLogo />
            <h1 className={`${oxanium.className} text-[#B6BBFF] text-lg sm:text-2xl lg:text-4xl uppercase relative z-10 font-semibold text-center px-4`}>
                <DecryptedText text='DEPARTMENT OF INFORMATION TECHNOLOGY' animateOn='view' speed={100} />

            </h1>
            <h1 className={`${oxanium.className} text-[#B6BBFF] text-xl sm:text-2xl lg:text-3xl uppercase relative z-10`}>
                <DecryptedText text='time remaining' animateOn='view' speed={150} />

            </h1>
            <Countdown />

            {/* Buttons */}
            <div className='w-[60%] sm:w-[40%] lg:w-[27%] relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 sm:h-[8%]'>

                <button
                    className={`${oxanium.className} h-10 w-full sm:h-[80%] sm:w-[40%] bg-[#6265fe] text-white text-xs sm:text-sm border-none`}
                    style={{ clipPath: buttonClipPath }}
                >
                    <DecryptedText text='EVENTS' animateOn='view' speed={250} />

                </button>

                <div
                    className="relative h-10 w-full sm:h-[80%] sm:w-[50%]"
                    style={{ clipPath: buttonClipPath }}
                >
                    <div className="absolute inset-0 border-4 border-white pointer-events-none" />
                    <button className={`${oxanium.className} w-full h-full bg-transparent text-white text-xs sm:text-sm`}>
                        <DecryptedText text='MAGAZINE' animateOn='view' speed={250} />
                    </button>
                </div>

            </div>

            {/* Left terminal text — hidden on small screens */}
            <div className='hidden lg:block absolute h-[30%] w-[15%] left-22 top-[50%] text-xs text-[#BEF3DF] blur-[0.6px]'>
                <DecryptedText
                    text={`> boot_illumine.exe\n\nINITIALIZING...\nILLUMINE 0x2K26\n\nNODE: IT DEPT // JADAVPUR UNIVERSITY\nEVENT: BIENNIAL REUNION\n\nFLAG: SILVER JUBILEE (25Y)\n\n...processing memories\n...compiling legacy\n...rendering future\n\n>> ACCESS GRANTED`}
                    animateOn="view"
                    speed={450}
                    className="whitespace-pre-wrap"
                />
            </div>

            {/* Right terminal text — hidden on small screens */}
            <div className='hidden lg:block absolute h-[40%] w-[15%] right-22 top-[30%] text-xs text-[#BEF3DF] text-right blur-[0.6px]'>
                <DecryptedText
                    text={`TRMX CORE\nLAB\nVRS 03.44.77   SYS INIT\nSEC NODE 77AF91C2   AUTH: ROOT\n\nPROCESS : EXEC [98.7%]\n----------------------\n\nCFG RESET   ACT:B-9\nNET CHN     QNT:D-4\n\nMEM:67%   TEMP:34C   GPU:OK\n\nINPUT:READY   OUTPUT:READY\nERR:NONE\n\n----------------------\n                    END >>`}
                    animateOn="view"
                    revealDirection="end"
                    speed={500}
                />
            </div>
            <div className='w-full h-full inset-0 absolute'>
                <PlusPath className='top-[15%] left-[25%]' delay={0.2} />
                <PlusPath className='top-[15%] left-[75%]' delay={0.6} />
                <PlusPath className='top-[15%] right-[5%]' delay={1.0} />
                <PlusPath className='bottom-[5%] left-[5%]' delay={1.4} />
                <PlusPath className='bottom-[5%] left-[15%]' delay={1.8} />

                <div className='h-[7%] w-[15%] absolute bottom-[5%] left-1/2 -translate-x-1/2 flex items-center justify-between'>
                    <SmallCircle speedFactor={0.8} />
                    <SmallCircle className='rotate-180' speedFactor={1} />
                    <SmallCircle speedFactor={1.2} />
                </div>

                {/* Decorative elements — hidden on small screens */}
                <BigCircle className='hidden lg:block right-[23%] top-[45%] scale-120' />
                <BigCircle className='hidden lg:block left-[20%] bottom-[20%] scale-80 rotate-180' />
                <BlueCircle className='hidden sm:block top-12 left-22' />
                <BlueCircle className='hidden sm:block bottom-8 right-22 rotate-180' />
                <VtLine className='hidden lg:block top-1/2 -translate-y-1/2 right-8 mt-16' />
            </div>
        </div>


    )
}

export default Hero