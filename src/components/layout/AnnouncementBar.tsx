import { site } from '../../data/site'
import { copyText } from '../../utils/toast'

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] bg-ember text-white">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[10px] font-semibold tracking-[0.18em] uppercase sm:text-[11px]">
        <span>{site.announcement}</span>
        <button
          type="button"
          onClick={() => copyText(site.offer.code, `Copied ${site.offer.code}`)}
          className="border border-white/40 px-2 py-0.5 tracking-[0.2em] hover:bg-white/10"
        >
          Copy {site.offer.code}
        </button>
      </p>
    </div>
  )
}
