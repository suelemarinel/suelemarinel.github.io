import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      tl.from(".hero-letter", {
        yPercent: 110,
        duration: 0.9,
        stagger: 0.04,
      })
        .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 12, duration: 0.6 }, "-=0.35")
    },
    { scope: heroRef }
  )

  return (
    <section className="hero" ref={heroRef}>
      <p className="hero-eyebrow">{content.hero.title}</p>
      <h1 className="hero-name" aria-label={content.hero.name}>
        {content.hero.name.split(" ").map((word, wi) => (
          <span className="hero-word" key={wi} aria-hidden="true">
            {word.split("").map((letter, li) => (
              <span className="hero-letter" key={li}>
                {letter}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p className="hero-tagline">{content.hero.tagline}</p>
    </section>
  )
}

export default Hero