import { motion } from 'framer-motion'

const orbs = [
  { className: 'left-[10%] top-[15%] size-[420px] bg-violet-500/35', delay: 0 },
  { className: 'right-[5%] top-[25%] size-[380px] bg-cyan-400/25', delay: 1.2 },
  { className: 'left-[35%] bottom-[5%] size-[520px] bg-fuchsia-500/20', delay: 2 },
  { className: 'right-[25%] top-[60%] size-[280px] bg-blue-500/25', delay: 0.6 },
]

export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-zinc-950 light:bg-zinc-100" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.35),transparent)] light:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.12),transparent)]" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[100px] ${orb.className}`}
          initial={{ opacity: 0.6, scale: 0.95 }}
          animate={{
            opacity: [0.45, 0.75, 0.5],
            scale: [0.95, 1.05, 0.98],
            x: [0, 24, -12, 0],
            y: [0, -18, 14, 0],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.04%22/%3E%3C/svg%3E')] opacity-40 light:opacity-25" />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 0, transparent 40%)',
        }}
      />
    </div>
  )
}
