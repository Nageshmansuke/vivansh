import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import {
  chatbotIntro,
  getForgeReply,
  suggestedQuestions,
  type ChatMessage,
} from '../../data/chatbot'

export function ForgeAI() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'intro', role: 'bot', text: chatbotIntro },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    const user: ChatMessage = { id: crypto.randomUUID(), role: 'user', text: trimmed }
    setMessages((prev) => [...prev, user])
    setInput('')
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'bot', text: getForgeReply(trimmed) },
      ])
    }, 420)
  }

  return (
    <div className="fixed right-2 bottom-[5.5rem] z-50 sm:right-6 lg:right-4 lg:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="mb-3 flex h-[min(560px,calc(100dvh-9rem))] w-[calc(100vw-1rem)] max-w-[380px] min-h-0 flex-col border border-line bg-charcoal shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            aria-label="Vivansh AI assistant"
          >
            <header className="flex shrink-0 items-center justify-between border-b border-line px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.28em] text-ember uppercase">
                  AI assistant
                </p>
                <p className="font-display text-2xl tracking-[0.08em]">VIVANSH AI</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center text-stone hover:text-bone"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </header>

            <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <p
                    className={
                      msg.role === 'user'
                        ? 'max-w-[85%] bg-ember px-3 py-2 text-sm whitespace-pre-line text-white'
                        : 'max-w-[85%] bg-steel px-3 py-2 text-sm whitespace-pre-line text-bone'
                    }
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => send(q)}
                    className="border border-line px-2.5 py-1.5 text-left text-[11px] text-stone hover:border-ember hover:text-bone"
                  >
                    {q}
                  </button>
                ))}
              </div>
              <div ref={endRef} />
            </div>

            <form
              className="shrink-0 border-t border-line p-3"
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
            >
              <div className="flex gap-2">
                <label className="sr-only" htmlFor="forge-ai-input">
                  Message Vivansh AI
                </label>
                <input
                  id="forge-ai-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about plans, hours, trials…"
                  className="h-11 flex-1 border border-line bg-void px-3 text-sm text-bone outline-none placeholder:text-mist focus:border-ember"
                />
                <button
                  type="submit"
                  className="grid h-11 w-11 place-items-center bg-ember text-white hover:bg-ember-hot"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="mt-2 text-[10px] tracking-wide text-mist">
                Demo replies only.{' '}
                <Link to="/trial" className="text-ember hover:text-ember-hot">
                  Book a trial
                </Link>
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 bg-ember px-4 py-3 text-[11px] font-semibold tracking-[0.2em] text-white uppercase shadow-[0_12px_40px_rgba(226,74,27,0.35)] hover:bg-ember-hot"
        aria-expanded={open}
      >
        <MessageCircle size={16} />
        Vivansh AI
      </button>
    </div>
  )
}
