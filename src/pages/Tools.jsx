import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const card = {
  hidden: { opacity: 0, y: 26, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Tools() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-4xl">
      <motion.header variants={card} className="mb-10 text-center md:text-start">
        <p className="text-sm font-medium tracking-wide text-cyan-400/90 light:text-cyan-600">
          الأدوات
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl light:text-zinc-900">
          روابط التنزيلات
        </h1>
        <p className="mt-3 max-w-xl text-zinc-400 light:text-zinc-600">
         ادوات, سكربتات روبلوكس,اي شي يخطر في البال
        </p>
      </motion.header>

      <motion.div variants={card} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
        <ToolCard
          name="ادات تبنيد حسابات تيك توك "
          description="ادات بسيطه للاستخدام تقدر تبند اي حساب في التيك توك"
          version="v1.3.6"
          href="/tools/AutoTiktokReporter.zip"
        />
      </motion.div>
    </motion.div>
  )
}

function ToolCard({ name, description, version, href }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 360, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl light:border-zinc-200/80 light:bg-white/55 light:shadow-sm"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-violet-500/25 to-cyan-400/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 light:text-zinc-900">{name}</h2>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-300 light:border-zinc-200/80 light:bg-zinc-100 light:text-zinc-600">
            {version}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
          {description}
        </p>
        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 inline-flex w-fit items-center justify-center rounded-xl border border-violet-400/40 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/15 px-4 py-2.5 text-sm font-medium text-zinc-100 shadow-[0_0_24px_rgba(139,92,246,0.25)] backdrop-blur-sm transition-[box-shadow,border-color] hover:border-violet-300/60 hover:shadow-[0_0_32px_rgba(167,139,250,0.45)] light:border-violet-300/50 light:from-violet-500/10 light:to-fuchsia-500/10 light:text-zinc-900 light:shadow-md"
        >
          تحميل
        </motion.a>
      </div>
    </motion.article>
  )
}
