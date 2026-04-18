import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { AnimatedBackground } from '../components/AnimatedBackground'
import { ThemeToggle } from '../components/ThemeToggle'

export function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-dvh">
      <AnimatedBackground />
      <ThemeToggle />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-5xl px-4 pb-20 pt-28 md:px-8 md:pt-36"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
