import { content } from "../content/content.js"

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">{content.hero.title}</p>
      <h1 className="hero-name">{content.hero.name}</h1>
      <p className="hero-tagline">{content.hero.tagline}</p>
    </section>
  )
}

export default Hero