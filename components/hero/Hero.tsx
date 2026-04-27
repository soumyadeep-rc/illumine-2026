import { Countdown } from '@/components/hero/Countdown'
import { HeroBackground } from '@/components/hero/HeroBackground'
import { HudPanel } from '@/components/hero/HudPanel'
import { Wordmark } from '@/components/hero/Wordmark'
import { RadarCircles } from '@/components/ui/RadarCircles'
import { RegistrationCross } from '@/components/ui/RegistrationCross'
import { SciFiLink } from '@/components/ui/SciFiButton'
import { countdownFrom } from '@/lib/countdown'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  const target = new Date(siteConfig.eventDate).getTime()
  // Server Component: read the wall clock at request/build time so the
  // countdown lands with a useful value before client hydration. The client
  // ticker takes over on mount.
  // eslint-disable-next-line react-hooks/purity
  const initial = countdownFrom(Date.now(), target)

  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <HeroBackground />

      {/* Decorative registration crosses scattered around the plate. */}
      <RegistrationCross className="top-[12%] left-[18%]" delay={0} />
      <RegistrationCross className="top-[10%] right-[22%]" delay={0.4} />
      <RegistrationCross className="top-[8%] right-[6%]" delay={0.8} />
      <RegistrationCross className="bottom-[18%] left-[6%]" delay={0.2} />
      <RegistrationCross className="bottom-[10%] left-[28%]" delay={0.6} />
      <RegistrationCross className="right-[42%] bottom-[6%]" delay={1.0} />
      <RegistrationCross className="top-[3%] left-[3%]" delay={0.3} size={14} />
      <RegistrationCross className="top-[3%] right-[3%]" delay={0.5} size={14} />

      {/* Decorative radar circles. */}
      <RadarCircles className="absolute top-[15%] left-[8%] hidden md:block" size={64} spin />
      <RadarCircles
        className="absolute top-[35%] right-[6%] hidden md:block"
        size={140}
        variant="arc"
      />
      <RadarCircles className="absolute right-[6%] bottom-[12%] hidden md:block" size={88} spin />
      <RadarCircles
        className="absolute top-[40%] left-[12%] hidden lg:block"
        size={60}
        variant="arc"
      />

      {/* Side HUD panels. */}
      <HudPanel align="left" className="absolute top-[22%] left-4 hidden max-w-[300px] xl:block" />
      <HudPanel
        align="right"
        className="absolute top-[16%] right-4 hidden max-w-[260px] xl:block"
      />

      {/* Main content stack — centred. */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-12">
        <Wordmark />

        <p className="font-display text-ink mt-8 text-base font-semibold tracking-[0.32em] uppercase sm:text-xl md:text-2xl">
          {siteConfig.department}
        </p>

        <p className="font-display text-ink/90 mt-5 max-w-3xl text-sm font-medium tracking-[0.32em] uppercase sm:text-base">
          A Quarter Century of Memories <span className="text-accent">·</span> Welcoming You Home
        </p>

        <blockquote className="text-muted mt-6 max-w-xl text-sm leading-relaxed italic sm:text-base">
          “Familiar paths we walked, where youthful dreams were cast,
          <br />
          come gather once again, to relive the golden past.”
        </blockquote>

        <div className="mt-12">
          <p className="text-muted mb-3 text-xs font-medium tracking-[0.4em] uppercase sm:text-sm">
            Time Remaining
          </p>
          <Countdown initial={initial} target={target} />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <SciFiLink href="/events" variant="solid" size="md">
            Events
          </SciFiLink>
          <SciFiLink href="/magazine" variant="outline" size="md">
            Magazine
          </SciFiLink>
        </div>

        {/* Bottom-centre crescent group. */}
        <div className="mt-14 flex items-end justify-center gap-3 opacity-50">
          <RadarCircles size={48} variant="arc" />
          <RadarCircles size={48} variant="arc" />
          <RadarCircles size={48} variant="arc" />
        </div>
      </div>
    </section>
  )
}
