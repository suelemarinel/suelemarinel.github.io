import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { content } from "../content/content.js"
import ProjectCard from "./ProjectCard.jsx"
import ProjectPanorama from "./ProjectPanorama.jsx"

function Projects() {
  const [hasHover, setHasHover] = useState(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const onChange = (e) => setHasHover(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  if (hasHover) return <ProjectPanorama />

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2 className="projects-heading">{content.projects.heading}</h2>
        <Link className="projects-see-all" to="/portfolio">
          {content.projects.seeAll} →
        </Link>
      </div>
      <div className="projects-track">
        {content.projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects