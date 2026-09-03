import { useEffect, useState } from 'react'
import { subscribeToasts } from '../../utils/toast'

export function ToastHost() {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    let hide: number
    return subscribeToasts((text) => {
      setMessage(text)
      window.clearTimeout(hide)
      hide = window.setTimeout(() => setMessage(null), 2800)
    })
  }, [])

  if (!message) return null

  return (
    <div
      role="status"
      className="fixed bottom-24 left-1/2 z-[85] -translate-x-1/2 border border-ember/50 bg-charcoal px-4 py-2 text-sm text-bone shadow-[0_12px_40px_rgba(0,0,0,0.4)] lg:bottom-8"
    >
      {message}
    </div>
  )
}
