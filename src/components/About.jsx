import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function About() {
  const aboutRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      })
    },
    { scope: aboutRef }
  )

  return (
    <section className="about" ref={aboutRef} id="about">
      <h2 className="about-heading about-reveal">{content.about.heading}</h2>
      {content.about.paragraphs.map((text, i) => (
        <p className="about-text about-reveal" key={i}>
          {text}
        </p>
      ))}
      <p className="about-punchline about-reveal">{content.about.punchline}</p>
    </section>
  )
}

export default About