import { useRef } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { content } from "../content/content.js"

gsap.registerPlugin(ScrollTrigger)

function ProjectDetail() {
  const { id } = useParams()
  const pageRef = useRef(null)
  const project = content.projects.items.find((p) => p.id === id)

  useGSAP(
    () => {
      if (!project) return
      gsap.from(".case-title", { yPercent: 60, opacity: 0, duration: 1, ease: "power3.out" })
      gsap.utils.toArray(".case-block").forEach((block) => {
        gsap.from(block, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: block, start: "top 75%" },
        })
      })
    },
    { scope: pageRef, dependencies: [id] }
  )

  if (!project) return <Navigate to="/portfolio" replace />

  const cs = project.caseStudy

  return (
    <main className="case" ref={pageRef}>
      <Link className="portfolio-back case-back" to="/portfolio">
        ← All projects
      </Link>

      <header className="case-header">
        <h1 className="case-title">{project.name}</h1>
        {project.demo && <span className="panorama-badge">Concept</span>}
      </header>

      {cs?.intro && <p className="case-intro case-block">{cs.intro}</p>}

      {cs?.sections.map((section, i) => (
        <figure className="case-block case-section" key={i}>
          <img src={section.image} alt={`${project.name} — view ${i + 1}`} loading="lazy" />
          {section.text && <figcaption>{section.text}</figcaption>}
        </figure>
      ))}

      <footer className="case-footer case-block">
        <dl className="case-details">
          {cs?.details &&
            Object.entries(cs.details).map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
        </dl>
        {project.url && (
          <a className="contact-cta" href={project.url} target="_blank" rel="noopener noreferrer">
            Visit live site →
          </a>
        )}
      </footer>
    </main>
  )
}

export default ProjectDetail