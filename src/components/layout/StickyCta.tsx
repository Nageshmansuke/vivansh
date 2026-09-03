import { Link, useLocation } from 'react-router-dom'
import { site } from '../../data/site'
import { whatsappUrl } from '../../utils/format'

export function StickyCta() {
  const { pathname } = useLocation()
  if (pathname === '/trial') return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <Link
          to="/trial"
          className="bg-ember py-3 text-center text-[11px] font-semibold tracking-[0.18em] text-white uppercase"
        >
          Free trial
        </Link>
        <a
          href={whatsappUrl(site.phoneRaw, site.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="border border-bone/30 py-3 text-center text-[11px] font-semibold tracking-[0.18em] text-bone uppercase"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
