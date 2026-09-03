type ToastFn = (message: string) => void

const listeners = new Set<ToastFn>()

export function toast(message: string) {
  listeners.forEach((fn) => fn(message))
}

export function subscribeToasts(fn: ToastFn) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}

export async function copyText(value: string, success = 'Copied') {
  try {
    await navigator.clipboard.writeText(value)
    toast(success)
  } catch {
    toast('Could not copy — select the text instead.')
  }
}
