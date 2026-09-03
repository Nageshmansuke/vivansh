import { instagram, site } from '../data/site'
import { OptimizedImage, SectionEyebrow } from '../components/ui/Primitives'

export function InstagramStrip() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto mb-10 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <SectionEyebrow>On the floor</SectionEyebrow>
        <h2 className="font-display text-5xl">The work, as it happens.</h2>
        <p className="mt-3 text-sm text-mist">
          Placeholder frames for an Instagram feed. Connect the gym’s real account before launch.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {instagram.map((post) => (
          <a
            key={post.id}
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <OptimizedImage
              src={post.image}
              alt={post.caption}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 16vw, 50vw"
            />
            <span className="absolute inset-0 flex items-end bg-ink/0 p-3 text-[11px] tracking-[0.16em] text-white uppercase opacity-0 transition group-hover:bg-ink/45 group-hover:opacity-100">
              {post.caption}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
