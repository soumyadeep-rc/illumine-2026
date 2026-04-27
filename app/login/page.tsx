import type { Metadata } from 'next'
import { signInWith, signInWithEmail } from '@/app/login/actions'
import { PageHeader } from '@/components/site/PageHeader'
import { SciFiButton } from '@/components/ui/SciFiButton'

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Sign in to the Illumine 2026 alumni network.',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>
}) {
  const { next = '/alumni' } = await searchParams

  return (
    <>
      <PageHeader
        eyebrow="// Access"
        title="Welcome back"
        description="Sign in with your preferred provider, or get a one-time link by email."
      />
      <section className="mx-auto max-w-md px-6 py-16 sm:px-12">
        <div className="grid gap-3">
          <form action={signInWith.bind(null, 'google', next)}>
            <SciFiButton type="submit" className="w-full" variant="solid">
              Continue with Google
            </SciFiButton>
          </form>
          <form action={signInWith.bind(null, 'github', next)}>
            <SciFiButton type="submit" className="w-full" variant="outline">
              Continue with GitHub
            </SciFiButton>
          </form>
        </div>

        <div className="my-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-dim font-mono text-[11px] tracking-[0.3em] uppercase">or</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form action={signInWithEmail} className="grid gap-3">
          <input type="hidden" name="next" value={next} />
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="bg-surface focus:border-accent text-ink placeholder:text-dim w-full border border-white/10 px-4 py-3 text-sm focus:outline-none"
          />
          <SciFiButton type="submit" variant="outline" className="w-full">
            Email me a magic link
          </SciFiButton>
        </form>
      </section>
    </>
  )
}
