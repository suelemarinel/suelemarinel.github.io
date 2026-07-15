import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

function Hero({ play }) {
  const heroRef = useRef(null)

  useGSAP(
    () => {
        if (!play) return
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      if (!reduced) {
        tl.from(".hero-stage", {
          z: -1600,
          rotationX: 22,
          autoAlpha: 0,
          duration: 1.5,
          ease: "expo.out",
        })
      }

      tl.from(
        ".hero-letter",
        {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.04,
        },
        reduced ? 0 : "-=0.55"
      )
        .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.6 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 12, duration: 0.6 }, "-=0.35")
        .from(".hero-scroll", { opacity: 0, duration: 0.8 }, "-=0.2")

      if (!reduced) {
        gsap.to(".hero-blob--one", {
          x: 60,
          y: -50,
          scale: 1.15,
          rotation: 20,
          duration: 9,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
        gsap.to(".hero-blob--two", {
          x: -50,
          y: 40,
          scale: 0.9,
          rotation: -15,
          duration: 11,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      }
    },
    { scope: heroRef, dependencies: [play] }
  )

  return (
    <section className="hero" ref={heroRef}>
      <div className={`hero-stage ${play ? "is-ready" : ""}`}>
        <div className="hero-blob hero-blob--one" aria-hidden="true"></div>
        <div className="hero-blob hero-blob--one" aria-hidden="true"></div>
        <div className="hero-blob hero-blob--two" aria-hidden="true"></div>
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
      </div>
      <a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to about section"
      >
        <span className="hero-scroll-line" aria-hidden="true"></span>
        scroll
      </a>
    </section>
  )
}

export default Hero