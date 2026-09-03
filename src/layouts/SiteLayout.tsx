import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { AnnouncementBar } from '../components/layout/AnnouncementBar'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { ScrollProgress } from '../components/layout/ScrollProgress'
import { ForgeAI } from '../components/chatbot/ForgeAI'
import { StickyCta } from '../components/layout/StickyCta'
import { Preloader } from '../components/layout/Preloader'
import { ToastHost } from '../components/ui/ToastHost'
import { BackToTop } from '../components/layout/BackToTop'
import { ExitIntent } from '../components/layout/ExitIntent'

export function SiteLayout() {
  const location = useLocation()

  return (
    <div className="grain min-h-dvh bg-ink pb-20 text-bone lg:pb-0">
      <Preloader />
      <a
        href="#main"
        className="absolute top-3 left-3 z-[80] -translate-y-16 bg-ember px-4 py-2 text-sm text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ForgeAI />
      <StickyCta />
      <BackToTop />
      <ExitIntent />
      <ToastHost />
      <ScrollRestoration />
    </div>
  )
}
