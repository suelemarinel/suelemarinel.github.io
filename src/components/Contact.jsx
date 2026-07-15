import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 32,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section className="contact" ref={sectionRef} id="contact">
      <h2 className="contact-heading contact-reveal">
        {content.contact.heading}
      </h2>
      <p className="contact-text contact-reveal">{content.contact.text}</p>
      <a
        className="contact-cta contact-reveal"
        href={`mailto:${content.contact.email}`}
      >
        {content.contact.cta}
      </a>
      <footer className="footer contact-reveal">
        <ul className="footer-socials">
          {content.contact.socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-note">
          © {new Date().getFullYear()} Sue Le Marinel — designed & built by me
        </p>
      </footer>
    </section>
  )
}

export default Contact