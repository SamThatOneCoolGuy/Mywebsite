import { useState } from 'react'
import { motion } from 'framer-motion'

/** ضع صورتك في مجلد `public` (مثل `public/profile.jpg`) أو غيّر الاسم هنا */
const PROFILE_IMAGE_SRC = '4d3aa5b4e3c9ccc3d8044369ddf79563.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
}

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function About() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-2xl">
      <motion.header variants={rise} className="mb-10 text-center md:text-start">
        <p className="text-sm font-medium tracking-wide text-violet-400/90 light:text-violet-600">
          نبذة عني
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl light:text-zinc-900">
          السلام عليكم انا هاش تاق
        </h1>
      </motion.header>

      <motion.div
        variants={rise}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl light:border-zinc-200/80 light:bg-white/60 light:shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-10"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-400/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start">
          <motion.div
            className="relative size-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/80 via-fuchsia-500/60 to-cyan-400/70 shadow-[0_0_40px_rgba(139,92,246,0.35)] light:border-zinc-200/80"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
          >
            {!photoFailed ? (
              <img
                src={PROFILE_IMAGE_SRC}
                alt="صورة الملف التعريفي"
                width={112}
                height={112}
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white">
                V
              </div>
            )}
          </motion.div>
          <div className="text-center md:text-start">
            <p className="text-xs font-medium tracking-wide text-zinc-500 light:text-zinc-500">
              الملف التعريفي
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
              مطوّر وصانع ادوات
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
              احب اني اطور ادوات وهاكات وانزلها للناس بدون دفع
              احب اخلي الكل عنده قدره انه يهكر او يبند الي يبي بدون ما يدفع
             
            </p>
          </div>
        </div>
      </motion.div>

      <motion.section variants={rise} className="mt-10">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
          من أنا
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400 light:text-zinc-600">
          واحد يحب يهكر اي شي وهاكاته غالبا مخيسه بس شنسوي
        </p>
      </motion.section>
    </motion.div>
  )
}
