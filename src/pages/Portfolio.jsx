import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
  const pageRef = useRef(null)

  useGSAP(
    () => {
      // 1️⃣ D'abord : l'animation d'entrée des images
      gsap.utils.toArray(".folio-slide").forEach((slide) => {
        const img = slide.querySelector(".panorama-image")
        if (!img) return

        gsap.from(img, {
          scale: 0.85,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            start: "top 60%",
          },
        })
      })

      // 2️⃣ Ensuite : le snap qui aimante le scroll
      ScrollTrigger.create({
        trigger: pageRef.current,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / content.projects.items.length,
          duration: { min: 0.2, max: 0.6 },
          ease: "power2.inOut",
        },
      })
    },
    { scope: pageRef }
  )

  return (
    <main className="folio" ref={pageRef}>
      <header className="folio-slide folio-intro">
        <Link className="portfolio-back" to="/">
          {content.projects.backHome}
        </Link>
        <h1 className="portfolio-title">{content.projects.portfolioTitle}</h1>
        <p className="portfolio-intro">{content.projects.portfolioIntro}</p>
        <p className="panorama-hint">Scroll ↓</p>
      </header>

      {content.projects.items.map((project) => (
        <Link
          className="folio-slide"
          key={project.id}
          to={`/portfolio/${project.id}`}
        >
          <div className="panorama-image">
            <img
              src={project.images?.[0]}
              alt={`Screenshot of ${project.name}`}
              loading="lazy"
            />
          </div>
          <h3 className="panorama-name">{project.name}</h3>
          <div className="panorama-meta">
            {project.demo && <span className="panorama-badge">Concept</span>}
            <span>{project.type}</span>
            <span className="panorama-client">{project.client}</span>
          </div>
        </Link>
      ))}
    </main>
  )
}

export default Portfolio