import { Container, OptimizedImage, SectionEyebrow } from './Primitives'

export function PageHero({
  eyebrow,
  title,
  body,
  image,
}: {
  eyebrow: string
  title: string
  body: string
  image?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {image && (
        <div className="absolute inset-0">
          <OptimizedImage src={image} alt="" className="h-full w-full object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/70" />
        </div>
      )}
      <Container className="relative py-20 md:py-28">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="font-display max-w-4xl text-[clamp(3rem,8vw,7rem)] leading-[0.86]">{title}</h1>
        <p className="mt-6 max-w-xl text-base text-stone md:text-lg">{body}</p>
      </Container>
    </section>
  )
}
