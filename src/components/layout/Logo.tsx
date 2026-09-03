import { Link } from 'react-router-dom'
import { cn } from '../../utils/format'

export function Logo({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        'group flex items-center gap-3',
        inverted ? 'text-ink' : 'text-bone',
      )}
      aria-label="Vivansh home"
    >
      <span
        className={cn(
          'grid place-items-center border border-ember text-ember transition-transform duration-300 group-hover:scale-[1.04]',
          compact ? 'h-8 w-8' : 'h-9 w-9',
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="none">
          <path d="M7 26V6h8.2c4.6 0 7.3 2.4 7.3 6.3 0 2.6-1.3 4.5-3.6 5.5L26 26h-4.4l-6.4-7.6H11V26H7Zm4-11.2h3.8c2.3 0 3.6-1.1 3.6-2.9s-1.3-2.8-3.6-2.8H11v5.7Z" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={cn('block font-display tracking-[0.18em]', compact ? 'text-[18px]' : 'text-[22px]')}>
          VIVANSH
        </span>
        <span className="block text-[9px] font-semibold tracking-[0.38em] text-mist uppercase">
          Gym
        </span>
      </span>
    </Link>
  )
}
