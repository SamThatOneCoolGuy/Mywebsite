import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const tabs = [
  { to: '/about', label: 'معلومات عني' },
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/tools', label: 'الأدوات' },
]

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5 md:pt-6">
      <nav
        dir="ltr"
        className="relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl light:border-zinc-200/70 light:bg-white/60 light:shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
        aria-label="التنقل الرئيسي"
      >
        {tabs.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'relative z-0 overflow-visible rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-colors md:px-7 md:text-[0.9375rem]',
                isActive
                  ? 'text-white light:text-zinc-900'
                  : 'text-zinc-400 hover:text-zinc-200 light:text-zinc-500 light:hover:text-zinc-800',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative z-10">{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/25 via-fuchsia-500/20 to-cyan-400/20 shadow-[0_0_28px_rgba(139,92,246,0.35)] ring-1 ring-white/10 light:from-violet-500/15 light:via-fuchsia-500/10 light:to-cyan-400/10 light:shadow-[0_0_24px_rgba(139,92,246,0.2)] light:ring-zinc-200/80"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="pointer-events-none absolute -bottom-0.5 left-1/2 z-20 h-0.5 w-[42%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_12px_rgba(167,139,250,0.9)] light:via-violet-500"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
