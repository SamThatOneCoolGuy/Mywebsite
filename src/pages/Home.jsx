import { motion } from 'framer-motion'

const socials = [
  {
    name: 'ديسكورد',
    href: 'https://discord.gg/DUaUeHFmmZ',
    icon: DiscordIcon,
    accent: 'from-indigo-400/30 to-violet-500/20',
    hoverGlow:
      'hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] focus-visible:shadow-[0_0_40px_rgba(99,102,241,0.35)]',
  },
  {
    name: 'تيك توك',
    href: 'https://www.tiktok.com/@hhzzxxll',
    icon: TikTokIcon,
    accent: 'from-cyan-400/25 to-fuchsia-500/20',
    hoverGlow:
      'hover:shadow-[0_0_40px_rgba(236,72,153,0.28)] focus-visible:shadow-[0_0_40px_rgba(236,72,153,0.28)]',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-14 md:gap-20">
      <motion.section variants={item} className="text-center">
        <div className="relative mx-auto inline-block">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-500/25 to-cyan-400/35 blur-3xl light:from-violet-500/25 light:via-fuchsia-400/15 light:to-cyan-400/20"
            animate={{ opacity: [0.65, 0.95, 0.7], scale: [0.98, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <h1 className="relative bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent drop-shadow-sm md:text-7xl light:from-zinc-900 light:via-zinc-800 light:to-zinc-600">
            Hashtag
          </h1>
        </div>
        <p className="mt-5 text-lg text-zinc-400 md:text-xl light:text-zinc-600">
          مطوّر <span className="text-zinc-600 light:text-zinc-400">•</span> مُبدع{' '}
          <span className="text-zinc-600 light:text-zinc-400">•</span> بانٍ
        </p>
      </motion.section>

      <motion.section variants={item} aria-labelledby="social-heading">
        <h2 id="social-heading" className="sr-only">
          روابط التواصل
        </h2>
        <div className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
          {socials.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_0_36px_rgba(139,92,246,0.22)] light:border-zinc-200/80 light:bg-white/50 light:shadow-sm light:hover:border-zinc-300 light:hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] ${s.hoverGlow}`}
            >
              <div
                className={`pointer-events-none absolute -right-6 -top-6 size-32 rounded-full bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${s.accent}`}
              />
              <div className="relative flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-100 light:border-zinc-200/80 light:bg-white/80 light:text-zinc-800">
                  <s.icon className="size-6" />
                </span>
                <div className="text-start">
                  <p className="text-sm font-medium text-zinc-400 light:text-zinc-500">تواصل</p>
                  <p className="text-lg font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
                    {s.name}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

function DiscordIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}
